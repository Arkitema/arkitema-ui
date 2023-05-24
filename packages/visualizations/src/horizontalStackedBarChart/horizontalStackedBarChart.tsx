import React from 'react'
import { BarStackHorizontal } from '@visx/shape'
import { SeriesPoint } from '@visx/shape/lib/types'
import { Group } from '@visx/group'
import { GridColumns, GridRows } from '@visx/grid'
import { AxisBottom, AxisLeft } from '@visx/axis'
import { scaleBand, scaleLinear, scaleOrdinal } from '@visx/scale'
import { withTooltip, Tooltip, defaultStyles } from '@visx/tooltip'
import { WithTooltipProvidedProps } from '@visx/tooltip/lib/enhancers/withTooltip'
import { LegendOrdinal, LegendItem, LegendLabel } from '@visx/legend'

export interface Values {
  [key: string]: number
}

export interface Item {
  label: string
  values: Values
}

type TooltipData = {
  bar: SeriesPoint<any>
  key: string
  index: number
  height: number
  width: number
  x: number
  y: number
  color: string
}

export type BarStackHorizontalProps = {
  width: number
  height: number
  margin?: { top: number; right: number; bottom: number; left: number }
  events?: boolean
  data: Item[]
  colors?: string[]
  xLabel: string
  xLabelSize: number
  fontFamily: string
  backgroundColor: string
  barPadding: number
  borderRadius: number
  verticalStrokeColor: string
  verticalStrokeOpacity: number
  verticalStrokeDasharray: string
  horizontalStrokeColor: string
  horizontalStrokeOpacity: number
  horizontalStrokeDasharray: string
}

const defaultMargin = { top: 100, left: 170, right: 100, bottom: 200 }
const tooltipStyles = {
  ...defaultStyles,
  minWidth: 60,
  backgroundColor: 'rgba(0,0,0,0.9)',
  color: 'white',
}
const defaultColors = [
  'rgba(100, 160, 136, 1)',
  'rgba(74, 82, 64, 1)',
  'rgba(111, 94, 92, 1)',
  'rgba(162, 132, 151, 1)',
  'rgba(198, 202, 237, 1)',
  'rgba(173, 168, 190, 1)',
]

export default withTooltip<BarStackHorizontalProps, TooltipData>(
  ({
    width,
    height,
    events = false,
    margin = defaultMargin,
    tooltipOpen,
    tooltipLeft,
    tooltipTop,
    tooltipData,
    hideTooltip,
    showTooltip,
    data,
    colors = defaultColors,
    xLabel,
    fontFamily,
    backgroundColor,
    barPadding,
    xLabelSize = 18,
    borderRadius = 0,
    verticalStrokeColor = 'black',
    verticalStrokeOpacity = 0.1,
    verticalStrokeDasharray = '3.3',
    horizontalStrokeColor = 'black',
    horizontalStrokeOpacity = 0.1,
    horizontalStrokeDasharray = '3.3',
  }: BarStackHorizontalProps & WithTooltipProvidedProps<TooltipData>) => {
    // bounds
    const xMax = width - margin.left - margin.right
    const yMax = height - margin.top - margin.bottom

    const keySet = new Set()
    data.forEach((item) => {
      for (const key in item.values) {
        keySet.add(key)
      }
    })

    const keys = Array.from(keySet) as string[]

    const valueTotals: number[] = []
    data.forEach((item) => {
      let total = 0
      Object.values(item.values).forEach((value, index) => {
        value === undefined ? (total += 0) : (total += value)
      })
      valueTotals.push(Number(total.toFixed(1)))
    })

    const getLabel = (d: any) => d.label

    const valueScale = scaleLinear<number>({
      domain: [0, Math.max(...valueTotals)],
      nice: true,
    })
    const labelScale = scaleBand<string>({
      domain: data.map(getLabel),
      padding: barPadding,
    })
    const colorScale = scaleOrdinal<string, string>({
      domain: keys,
      range: colors,
    })

    let tooltipTimeout: number

    valueScale.rangeRound([0, xMax])
    labelScale.rangeRound([yMax, 0])

    interface FormattedEntry {
      label: string
      [key: string]: number | string
    }

    const newDataFormat: FormattedEntry[] = data.map((entry: Item) => {
      const dataObject: FormattedEntry = { label: entry.label }
      keys.map((key) => {
        key in entry.values ? (dataObject[key] = entry.values[key]) : (dataObject[key] = 0)
      })
      return dataObject
    })

    return width < 10 ? null : (
      <div style={{ fontFamily: fontFamily }}>
        <svg width={width} height={height}>
          <rect width={width} height={height} fill={backgroundColor} rx={14} />
          <Group top={margin.top} left={margin.left}>
            <GridColumns
              scale={valueScale}
              height={yMax}
              stroke={verticalStrokeColor}
              strokeOpacity={verticalStrokeOpacity}
              strokeDasharray={verticalStrokeDasharray}
            />
            <GridRows
              scale={labelScale}
              width={xMax}
              stroke={horizontalStrokeColor}
              strokeOpacity={horizontalStrokeOpacity}
              strokeDasharray={horizontalStrokeDasharray}
              offset={labelScale.bandwidth() / 2}
            />
            <BarStackHorizontal<any, string>
              data={newDataFormat}
              keys={keys}
              height={yMax}
              y={getLabel}
              xScale={valueScale}
              yScale={labelScale}
              color={colorScale}
            >
              {(barStacks) =>
                barStacks.map((barStack) =>
                  barStack.bars.map((bar, index) => (
                    <rect
                      key={`barstack-horizontal-${barStack.index}-${bar.index}`}
                      x={bar.x}
                      y={bar.y}
                      ry={borderRadius}
                      width={bar.width}
                      height={bar.height}
                      fill={bar.color}
                      onClick={() => {
                        if (events) alert(`clicked: ${JSON.stringify(bar)}`)
                      }}
                      onMouseLeave={() => {
                        tooltipTimeout = window.setTimeout(() => {
                          hideTooltip()
                        }, 300)
                      }}
                      onMouseMove={() => {
                        if (tooltipTimeout) clearTimeout(tooltipTimeout)
                        const top = bar.y + margin.top
                        const left = bar.x + bar.width + margin.left
                        showTooltip({
                          tooltipData: bar,
                          tooltipTop: top,
                          tooltipLeft: left,
                        })
                      }}
                    />
                  )),
                )
              }
            </BarStackHorizontal>
            <AxisLeft
              hideAxisLine
              hideTicks
              scale={labelScale}
              stroke={colors[2]}
              tickStroke={colors[2]}
              tickLabelProps={() => ({
                fill: '#5A5A5A',
                fontSize: 16,
                textAnchor: 'end',
                dy: '0.33em',
                fontFamily: fontFamily,
              })}
            />
            <AxisBottom
              top={yMax}
              label={xLabel}
              labelProps={{
                fontSize: xLabelSize,
                textAnchor: 'middle',
                fontFamily: fontFamily,
                y: 65,
              }}
              scale={valueScale}
              stroke={colors[2]}
              tickStroke={'black'}
              tickLabelProps={() => ({
                fill: '#5A5A5A',
                fontSize: 16,
                textAnchor: 'middle',
                fontFamily: fontFamily,
              })}
            />
          </Group>
        </svg>
        <LegendElement width={width} colorScale={colorScale} margins={margin} fontFamily={fontFamily} />

        {tooltipOpen && tooltipData && (
          <Tooltip top={tooltipTop} left={tooltipLeft} style={tooltipStyles}>
            <div style={{ color: colorScale(tooltipData.key) }}>
              <strong>{tooltipData.key}</strong>
            </div>
            <div>{tooltipData.bar.data[tooltipData.key]}</div>
            <div>
              <small>{getLabel(tooltipData.bar.data)}</small>
            </div>
          </Tooltip>
        )}
      </div>
    )
  },
)

export type LegendElement = {
  margins: any
  width: number
  colorScale: any
  fontFamily: string
}

function LegendElement({ margins, width, colorScale, fontFamily }: LegendElement) {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: margins.bottom / 2 - 15,
        left: margins.left,
        width: width - margins.right - margins.left,
        display: 'flex',
        justifyContent: 'center',
        fontSize: '14px',
        fontFamily: fontFamily,
      }}
    >
      <LegendOrdinal scale={colorScale}>
        {(labels) => (
          <div style={{ display: 'flex', flexDirection: 'row', fontSize: '20px', fontFamily: fontFamily }}>
            {labels.map((label, i) => (
              <LegendItem key={`legend-quantile-${i}`} margin='0 20px'>
                <svg width={10} height={10}>
                  <rect fill={label.value} width={10} height={100} />
                </svg>
                <LegendLabel align='left' margin='0 0 0 7px'>
                  {label.text}
                </LegendLabel>
              </LegendItem>
            ))}
          </div>
        )}
      </LegendOrdinal>
    </div>
  )
}
