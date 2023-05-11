import React from 'react'
import PieChart, { Value, centerText } from './pieChart'
import type { Meta, StoryObj } from '@storybook/react'

const browsers: Value[] = [
  { label: 'Google Chrome', value: 48.09 },
  { label: 'Internet Explorer', value: 24.14 },
  { label: 'Firefox', value: 18.82 },
  { label: 'Safari', value: 56.45 },
  { label: 'Microsoft Edge', value: 57.65 },
  { label: 'Opera', value: 1.32 },
  { label: 'Mozilla', value: 0.12 },
  { label: 'Other/Unknown', value: 0.01 },
]

const meta: Meta<typeof PieChart> = { title: 'Example/PieChart', component: PieChart }
export default meta

type Story = StoryObj<typeof PieChart>

const data = {
  width: 1000,
  height: 1000,
  colors: [
    'rgba(100, 160, 136, 1)',
    'rgba(74, 82, 64, 1)',
    'rgba(111, 94, 92, 1)',
    'rgba(162, 132, 151, 1)',
    'rgba(198, 202, 237, 1)',
    'rgba(173, 168, 190, 1)',
  ],
  data: browsers,
  donutThickness: 280,
  fontFamily: 'Arial, Helvetica, sans-serif',
  centerText: {
    enabled: true,
    text: 'kg CO2-eq/m2/year',
    textSize: 36,
    aggregation: 'sum',
    unitTextSize: 24,
  } as centerText,
}

export const Template: Story = ({ ...rest }) => {
  return <PieChart data={data} {...rest} />
}

Template.args = {
  width: 1000,
  height: 1000,
  colors: [
    'rgba(100, 160, 136, 1)',
    'rgba(74, 82, 64, 1)',
    'rgba(111, 94, 92, 1)',
    'rgba(162, 132, 151, 1)',
    'rgba(198, 202, 237, 1)',
    'rgba(173, 168, 190, 1)',
  ],
  data: browsers,
  donutThickness: 280,
  fontFamily: 'Arial, Helvetica, sans-serif',
  centerText: {
    enabled: true,
    text: 'kg CO2-eq/m2/year',
    textSize: 36,
    aggregation: 'sum',
    unitTextSize: 24,
  } as centerText,
}
