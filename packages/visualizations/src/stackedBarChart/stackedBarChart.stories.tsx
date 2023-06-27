// import React from 'react'
// import StackedBarChart, { Item } from './stackedBarChart'
// import { ComponentStory, ComponentMeta } from '@storybook/react'

// export default {
//   title: 'Example/StackedBarChart',
//   component: StackedBarChart,
//   parameters: {
//     layout: 'fullscreen',
//   },
// } as ComponentMeta<typeof StackedBarChart>

// const components: Item[] = [
//   { label: 'Building Base', values: { 'A1-A3': 2.3, A4: 4.6, C1: 20 } },
//   { label: 'Primary Building Parts', values: { A4: 2.7, C1: 6.6, C2: 1, D1: 5 } },
//   { label: 'Supplementary Building parts1', values: { 'A1-A3': 2.7, D1: 7.6 } },
//   { label: 'Supplementary Building parts3', values: { D1: 6 } },
//   { label: 'Supplementary Building parts5', values: { D2: 2.9, D3: 4 } },
//   { label: 'Supplementary Building parts4', values: { 'A1-A3': 8 } },
// ]

// export const Template: ComponentStory<typeof StackedBarChart> = ({ ...rest }) => {
//   return <StackedBarChart {...rest} />
// }

// Template.args = {
// width: 1000,
// height: 1000,
// colors: [
//   'rgba(100, 160, 136, 1)',
//   'rgba(74, 82, 64, 1)',
//   'rgba(111, 94, 92, 1)',
//   'rgba(162, 132, 151, 1)',
//   'rgba(198, 202, 237, 1)',
//   'rgba(173, 168, 190, 1)',
// ],
// data: components,
// yLabel: 'CO2',
// fontFamily: 'sans-serif',
// backgroundColor: '#FFFFFF',
// verticalStrokeColor: '#000000',
// verticalStrokeOpacity: 0.1,
// verticalStrokeDasharray: '3.3',
// horizontalStrokeColor: '#000000',
// horizontalStrokeOpacity: 0.1,
// horizontalStrokeDasharray: '3.3',
// borderRadius: 0,
// }

import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import StackedBarChart, { Item } from './stackedBarChart'
import { BrowserRouter as Router } from 'react-router-dom'

const components: Item[] = [
  { label: 'Building Base', values: { 'A1-A3': 2.3, A4: 4.6, C1: 20 } },
  { label: 'Primary Building Parts', values: { A4: 2.7, C1: 6.6, C2: 1, D1: 5 } },
  { label: 'Supplementary Building parts1', values: { 'A1-A3': 2.7, D1: 7.6 } },
  { label: 'Supplementary Building parts3', values: { D1: 6 } },
  { label: 'Supplementary Building parts5', values: { D2: 2.9, D3: 4 } },
  { label: 'Supplementary Building parts4', values: { 'A1-A3': 8 } },
]

const meta: Meta<typeof StackedBarChart> = {
  title: 'StackedBarChart',
  component: StackedBarChart,
}

export default meta

type Story = StoryObj<typeof StackedBarChart>

export const Primary: Story = {
  args: {
    width: 1000,
    height: 500,
    colors: [
      'rgba(100, 160, 136, 1)',
      'rgba(74, 82, 64, 1)',
      'rgba(111, 94, 92, 1)',
      'rgba(162, 132, 151, 1)',
      'rgba(198, 202, 237, 1)',
      'rgba(173, 168, 190, 1)',
    ],
    data: components,
    yLabel: 'CO2',
    fontFamily: 'sans-serif',
    backgroundColor: '#FFFFFF',
    verticalStrokeColor: '#000000',
    verticalStrokeOpacity: 0.1,
    verticalStrokeDasharray: '3.3',
    horizontalStrokeColor: '#000000',
    horizontalStrokeOpacity: 0.1,
    horizontalStrokeDasharray: '3.3',
    borderRadius: 0,
  },
  decorators: [
    (StoryComponent) => (
      <Router>
        <StoryComponent />
      </Router>
    ),
  ],
}
