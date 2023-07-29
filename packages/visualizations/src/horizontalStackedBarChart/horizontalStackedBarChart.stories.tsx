import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import HorizontalStackedBarChart, { Item } from './horizontalStackedBarChart'
import { BrowserRouter as Router } from 'react-router-dom'

const tasks: Item[] = [
  { label: 'Architecture', values: { Pending: 2, Done: 7, Approved: 5 } },
  { label: 'Structures', values: { Pending: 5, Done: 7, Approved: 5 } },
  { label: 'Mechanical', values: { Pending: 2, Done: 9, Approved: 5 } },
  { label: 'Contractor', values: { Pending: 9, Done: 7, Approved: 3 } },
]

const meta: Meta<typeof HorizontalStackedBarChart> = {
  title: 'HorizontalStackedBarChart',
  component: HorizontalStackedBarChart,
}

export default meta

type Story = StoryObj<typeof HorizontalStackedBarChart>

export const Primary: Story = {
  args: {
    width: 1000,
    height: 800,
    data: tasks,
    colors: ['#E06763', '#FEA943', '#6C8E85'],
    xLabel: 'Number of Tasks',
    xLabelSize: 18,
    fontFamily: 'Matter',
    backgroundColor: '#FFFFFF',
    barPadding: 0.4,
    borderRadius: 0,
    verticalStrokeColor: '#000000',
    verticalStrokeOpacity: 0.1,
    verticalStrokeDasharray: '3.3',
    horizontalStrokeColor: '#000000',
    horizontalStrokeOpacity: 0.1,
    horizontalStrokeDasharray: '3.3',
  },
  decorators: [
    (StoryComponent) => (
      <Router>
        <StoryComponent />
      </Router>
    ),
  ],
}
