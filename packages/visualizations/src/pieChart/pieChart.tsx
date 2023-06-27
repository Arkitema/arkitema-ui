import React, { useState, useRef, useEffect } from 'react'
import Pie, { ProvidedProps, PieArcDatum } from '@visx/shape/lib/shapes/Pie'
import { scaleOrdinal } from '@visx/scale'
import { Group } from '@visx/group'
import { animated, useTransition, to } from '@react-spring/web'

export interface Value {
  label: string
  value: number
}

const defaultMargin = { top: 20, right: 20, bottom: 20, left: 20 }
const defaultFontFamily = 'Arial, Helvetica, sans-serif'
const defaultColors = [
  'rgba(45, 160, 136, 1)',
  'rgba(74, 82, 64, 1)',
  'rgba(111, 94, 92, 1)',
  'rgba(162, 132, 151, 1)',
  'rgba(198, 202, 237, 1)',
  'rgba(173, 168, 190, 1)',
]
const defaultCenterText = {
  enabled: true,
  text: 'kg CO2-eq/m2/year',
  textSize: 36,
  aggregation: 'sum',
  unitTextSize: 24,
} as centerText

export type centerText = {
  enabled: boolean
  text: string
  textSize: number
  aggregation: string
  unitTextSize: number
}

export type PieProps = {
  width?: number
  height?: number
  margin?: typeof defaultMargin
  animate?: boolean
  colors?: string[]
  data: Value[]
  donutThickness?: number
  fontFamily?: string
  labelFontSize?: number
  centerText?: centerText
}

export default function PieChart({
  width = 1000,
  height = 1000,
  margin = defaultMargin,
  animate = false,
  colors = defaultColors,
  data,
  donutThickness = 280,
  fontFamily = defaultFontFamily,
  labelFontSize = 14,
  centerText = defaultCenterText,
}: PieProps) {
  const [selectedDataPoint, setSelectedDataPoint] = useState<string | null>(null)

  if (width < 10) return null
  const values = (d: Value) => d.value
  const totalValue =
    (Math.round(
      data
        .map((item) => item.value)
        .reduce(function (sum, current) {
          return sum + current
        }),
    ) *
      100) /
    100

  const averageValue =
    (Math.round(
      data
        .map((item) => item.value)
        .reduce(function (sum, current) {
          return sum + current
        }),
    ) *
      100) /
    100 /
    data.length

  const labels = data.map((datapoint) => {
    return datapoint.label
  })

  const innerWidth = width - margin.left - margin.right
  const innerHeight = height - margin.top - margin.bottom
  const radius = Math.min(innerWidth, innerHeight) / 2
  const centerY = innerHeight / 2
  const centerX = innerWidth / 2

  const getBrowserColor = scaleOrdinal({
    domain: labels,
    range: colors.map((color) => {
      return color
    }),
  })

  const centerTextElements = (
    <>
      <TextElement
        textContent={centerText.aggregation === 'sum' ? totalValue : averageValue}
        chartWidth={width}
        height={height / 2}
        fontSize={centerText.textSize}
        fontFamily={fontFamily}
      />
      <TextElement
        textContent={centerText.text}
        chartWidth={width}
        height={height - height / 2.2}
        fontSize={centerText.unitTextSize}
        fontFamily={fontFamily}
      />
    </>
  )

  return (
    <svg width={width} height={height}>
      <rect rx={14} width={width} height={height} fill="url('#visx-pie-gradient')" />
      <Group top={centerY + margin.top} left={centerX + margin.left}>
        <Pie
          data={selectedDataPoint ? data.filter(({ label }) => label === selectedDataPoint) : data}
          pieValue={values}
          outerRadius={radius}
          innerRadius={radius - donutThickness}
          cornerRadius={3}
          padAngle={0.005}
        >
          {(pie: ProvidedProps<Value>) => (
            <AnimatedPie
              {...pie}
              animate={animate}
              getKey={(arc) =>
                arc.data.label + '\n' + (Math.round((arc.data.value / totalValue) * 100) * 100) / 100 + '%'
              }
              onClickDatum={({ data: { label } }) =>
                animate && setSelectedDataPoint(selectedDataPoint && selectedDataPoint === label ? null : label)
              }
              getColor={(arc) => getBrowserColor(arc.data.label)}
              fontFamily={fontFamily}
              fontSize={labelFontSize}
            />
          )}
        </Pie>
      </Group>
      {centerText.enabled && centerTextElements}
    </svg>
  )
}

export type TextProps = {
  textContent: number | string
  chartWidth: number
  height: number
  fontSize: number
  fontFamily: string
}

function TextElement({ textContent, chartWidth, height, fontSize, fontFamily = defaultFontFamily }: TextProps) {
  const textRef = useRef<SVGTextElement>(null)

  useEffect(() => {
    const textElement = textRef.current

    if (textElement) {
      const { width } = textElement.getBBox()
      const x = chartWidth / 2
      const y = height
      textElement.setAttribute('x', String(x))
      textElement.setAttribute('y', String(y))
    }
  }, [textContent, chartWidth, height])

  return (
    <text
      ref={textRef}
      textAnchor='middle'
      fill='black'
      fontSize={fontSize}
      fontWeight={300}
      pointerEvents='none'
      fontFamily={fontFamily}
    >
      {textContent}
    </text>
  )
}

type AnimatedStyles = { startAngle: number; endAngle: number; opacity: number }

const fromLeaveTransition = ({ endAngle }: PieArcDatum<any>) => ({
  startAngle: endAngle > Math.PI ? 2 * Math.PI : 0,
  endAngle: endAngle > Math.PI ? 2 * Math.PI : 0,
  opacity: 0,
})
const enterUpdateTransition = ({ startAngle, endAngle }: PieArcDatum<any>) => ({
  startAngle,
  endAngle,
  opacity: 1,
})

type AnimatedPieProps<Datum> = ProvidedProps<Datum> & {
  animate?: boolean
  getKey: (d: PieArcDatum<Datum>) => string
  getColor: (d: PieArcDatum<Datum>) => string
  onClickDatum: (d: PieArcDatum<Datum>) => void
  delay?: number
  fontFamily: string
  fontSize: number
}

function AnimatedPie<Datum>({
  animate,
  arcs,
  path,
  getKey,
  getColor,
  fontFamily,
  fontSize = 16,
}: AnimatedPieProps<Datum>) {
  const transitions = useTransition<PieArcDatum<Datum>, AnimatedStyles>(arcs, {
    from: animate ? fromLeaveTransition : enterUpdateTransition,
    enter: enterUpdateTransition,
    update: enterUpdateTransition,
    leave: animate ? fromLeaveTransition : enterUpdateTransition,
    keys: getKey,
  })
  return transitions((props, arc, { key }) => {
    const [centroidX, centroidY] = path.centroid(arc)
    const hasSpaceForLabel = arc.endAngle - arc.startAngle >= 0.05

    return (
      <g key={key}>
        <animated.path
          d={to([props.startAngle, props.endAngle], (startAngle, endAngle) =>
            path({
              ...arc,
              startAngle,
              endAngle,
            }),
          )}
          fill={getColor(arc)}
        />
        {hasSpaceForLabel && (
          <animated.g style={{ opacity: props.opacity }}>
            <text
              fill='white'
              x={centroidX}
              y={centroidY}
              dy='.33em'
              fontSize={fontSize}
              textAnchor='middle'
              pointerEvents='none'
              fontFamily={fontFamily}
            >
              {getKey(arc)}
            </text>
          </animated.g>
        )}
      </g>
    )
  })
}
