import React, { useRef, useEffect } from 'react'
import { BarStack } from '@visx/shape'
import { SeriesPoint } from '@visx/shape/lib/types'
import { Group } from '@visx/group'
import { GridColumns, GridRows } from '@visx/grid'
import { AxisBottom, AxisLeft } from '@visx/axis'
import { scaleBand, scaleLinear, scaleOrdinal } from '@visx/scale'
import { useTooltip, useTooltipInPortal, defaultStyles } from '@visx/tooltip'
import { LegendOrdinal } from '@visx/legend'
import { localPoint } from '@visx/event'

interface Values {
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

export type BarStackProps = {
  width: number
  height: number
  margin?: { top: number; right: number; bottom: number; left: number }
  events?: boolean
  data: Item[]
  colors?: string[]
  yLabel: string
  fontFamily: string
  backgroundColor: string
  verticalStrokeColor: string
  verticalStrokeOpacity: number
  verticalStrokeDasharray: string
  horizontalStrokeColor: string
  horizontalStrokeOpacity: number
  horizontalStrokeDasharray: string
  borderRadius: number
}

export const defaultBackground = '#FFFFFF'
const defaultMargin = { top: 0, right: 0, bottom: 0, left: 110 }
const tooltipStyles = {
  ...defaultStyles,
  minWidth: 60,
  backgroundColor: 'rgba(0,0,0,0.9)',
  color: 'white',
}
const defaultColors: string[] = [
  'rgba(45, 160, 136, 1)',
  'rgba(74, 82, 64, 1)',
  'rgba(111, 94, 92, 1)',
  'rgba(162, 132, 151, 1)',
  'rgba(198, 202, 237, 1)',
  'rgba(173, 168, 190, 1)',
]

const defaultFontFamily = 'Arial, Helvetica, sans-serif'

export default function StackedBarChart({
  width,
  height,
  events = false,
  margin = defaultMargin,
  data,
  colors = defaultColors,
  yLabel,
  fontFamily = defaultFontFamily,
  backgroundColor = defaultBackground,
  verticalStrokeColor = 'black',
  verticalStrokeOpacity = 0.1,
  verticalStrokeDasharray = '3.3',
  horizontalStrokeColor = 'black',
  horizontalStrokeOpacity = 0.1,
  horizontalStrokeDasharray = '3.3',
  borderRadius = 0,
}: BarStackProps) {
  const { tooltipOpen, tooltipLeft, tooltipTop, tooltipData, hideTooltip, showTooltip } = useTooltip<TooltipData>()

  if (width < 10) return null
  // bounds
  const xMax = width
  const yMax = height - margin.top - 100

  // Getting phase labels
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

  const labelScale = scaleBand<string>({
    domain: data.map(getLabel),
    padding: 0.4,
  })
  labelScale.rangeRound([0, width])

  const valueScale = scaleLinear<number>({
    domain: [0, Math.max(...valueTotals)],
    nice: true,
  })
  valueScale.range([yMax, 0])

  const colorScale = scaleOrdinal<string, string>({
    domain: keys,
    range: colors,
  })

  let tooltipTimeout: number

  const { containerRef, TooltipInPortal } = useTooltipInPortal({
    scroll: true,
  })

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
    <div style={{ display: 'flex', flexDirection: 'row', marginLeft: margin.left, marginTop: margin.top, alignItems: 'center', height: '100%' }}>
      <svg ref={containerRef} width={width + margin.left} height={height + 150} style={{ margin: 50 }}>
        <rect x={margin.left} y={0} width={width} height={height} fill={backgroundColor} rx={14} />
        <GridColumns
          left={margin.left}
          scale={labelScale}
          height={yMax}
          stroke={verticalStrokeColor}
          strokeOpacity={verticalStrokeOpacity}
          strokeDasharray={verticalStrokeDasharray}
        />
        <GridRows
          top={margin.top - 55}
          left={margin.left}
          scale={valueScale}
          width={xMax}
          stroke={horizontalStrokeColor}
          strokeOpacity={horizontalStrokeOpacity}
          strokeDasharray={horizontalStrokeDasharray}
          offset={labelScale.bandwidth() / 2}
        />
        <Group top={margin.top} left={margin.left}>
          <BarStack<any, string>
            data={newDataFormat}
            keys={keys}
            x={getLabel}
            xScale={labelScale}
            yScale={valueScale}
            color={colorScale}
          >
            {(barStacks) => {
              return barStacks.map((barStack) =>
                barStack.bars.map((bar) => (
                  <rect
                    key={`bar-stack-${barStack.index}-${bar.index}`}
                    ry={borderRadius}
                    x={bar.x}
                    y={bar.y}
                    height={bar.height}
                    width={bar.width}
                    fill={bar.color}
                    onClick={() => {
                      if (events) alert(`clicked: ${JSON.stringify(bar)}`)
                    }}
                    onMouseLeave={() => {
                      tooltipTimeout = window.setTimeout(() => {
                        hideTooltip()
                      }, 300)
                    }}
                    onMouseMove={(event) => {
                      if (tooltipTimeout) clearTimeout(tooltipTimeout)
                      const eventSvgCoords = localPoint(event)
                      const left = bar.x + bar.width / 2
                      showTooltip({
                        tooltipData: bar,
                        tooltipTop: eventSvgCoords?.y,
                        tooltipLeft: left,
                      })
                    }}
                  />
                )),
              )
            }}
          </BarStack>
        </Group>
        <Group left={margin.left}>
          <AxisBottom
            top={yMax + margin.top}
            scale={labelScale}
            stroke={colors[2]}
            tickStroke={colors[2]}
            tickLabelProps={() => ({
              angle: -45,
              fill: colors[2],
              fontSize: 16,
              textAnchor: 'end',
              fontFamily: fontFamily,
            })}
          />
          <AxisLeft
            scale={valueScale}
            label={yLabel}
            labelProps={{
              fontSize: 36,
              y: -80,
              fontFamily: fontFamily,
            }}
            stroke={colors[2]}
            tickStroke={colors[2]}
            tickLabelProps={() => ({
              fill: colors[2],
              fontSize: 16,
              textAnchor: 'middle',
              dy: '0.33em',
              dx: '-1.5em',
              fontFamily: fontFamily,
            })}
            left={valueScale.domain()[0]}
          />
        </Group>
      </svg>
      {/* <div
        style={{
          position: 'absolute',
          left: '30%',
          top: '40%',
          transform: 'translateY(-50%)',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          fontSize: '16px',
          fontFamily: fontFamily,
        }}
      >
        <LegendOrdinal scale={colorScale} direction='column' labelMargin='0 30px 0 0' />
      </div> */}
      <LegendElement
        data={data}
        colorScale={colorScale}
        fontFamily={fontFamily}
        chartHeight={height}
        chartWidth={width}
      />
      {tooltipOpen && tooltipData && (
        <TooltipInPortal top={tooltipTop} left={tooltipLeft} style={tooltipStyles}>
          <div style={{ color: colorScale(tooltipData.key) }}>
            <strong>{tooltipData.key}</strong>
          </div>
          <div>{tooltipData.bar.data[tooltipData.key]}</div>
          <div>
            <small>{data[0].label}</small>
          </div>
        </TooltipInPortal>
      )}
    </div>
  )
}

export type LegendElement = {
  colorScale: any
  fontFamily: string
  data: Item[]
  chartWidth: number
  chartHeight: number
}

function LegendElement({ colorScale, fontFamily }: LegendElement) {

  return (
    <div
      style={{
        marginLeft: '20px', 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: '16px',
        fontFamily: fontFamily,
        transform: 'translateY(-90%)',
      }}
    >
      <LegendOrdinal scale={colorScale} direction='column' labelMargin='0 30px 0 0' />
    </div>
  )
}
