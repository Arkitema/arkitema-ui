import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import PieChart, { Value, centerText } from './pieChart'
import { BrowserRouter as Router } from 'react-router-dom'
import { theme } from '@arkitema/brand'

const meta: Meta<typeof PieChart> = {
  title: 'PieChart',
  component: PieChart,
}

export default meta

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

type Story = StoryObj<typeof PieChart>

export const Primary: Story = {
  args: {
    width: 500,
    height: 500,
    donutThickness: 150,
    colors: [
      'rgba(100, 160, 136, 1)',
      'rgba(74, 82, 64, 1)',
      'rgba(111, 94, 92, 1)',
      'rgba(162, 132, 151, 1)',
      'rgba(198, 202, 237, 1)',
      'rgba(173, 168, 190, 1)',
    ],
    data: browsers,
    fontFamily: theme.typography.fontFamily,
    labelFontSize: 14,
    centerText: {
      enabled: true,
      text: 'kg CO₂/m²/y',
      textSize: 36,
      aggregation: 'sum',
      unitTextSize: 15,
    } as centerText,
  },
  decorators: [
    (StoryComponent) => (
      <Router>
        <StoryComponent />
      </Router>
    ),
  ],
}
