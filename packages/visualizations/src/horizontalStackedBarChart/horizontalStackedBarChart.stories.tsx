import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Example, { Item } from './horizontalStackedBarChart'

const tasks: Item[] = [
  { label: 'Architecture', values: { Pending: 2, Done: 7, Approved: 5 } },
  { label: 'Structures', values: { Pending: 5, Done: 7, Approved: 5 } },
  { label: 'Mechanical', values: { Pending: 2, Done: 9, Approved: 5 } },
  { label: 'Contractor', values: { Pending: 9, Done: 7, Approved: 3 } },
]

export default {
  title: 'Example/HorizontalStackedBarChart',
  component: Example,
} as ComponentMeta<typeof Example>

export const Template: ComponentStory<typeof Example> = ({ ...rest }) => {
  return <Example {...rest} />
}

Template.args = {
  width: 1500,
  height: 1000,
  data: tasks,
  colors: ['#E06763', '#FEA943', '#6C8E85'],
  xLabel: 'Number of Tasks',
  xLabelSize: 18,
  fontFamily: 'sans-serif',
  backgroundColor: '#FFFFFF',
  barPadding: 0.4,
  borderRadius: 0,
  verticalStrokeColor: '#000000',
  verticalStrokeOpacity: 0.1,
  verticalStrokeDasharray: '3.3',
  horizontalStrokeColor: '#000000',
  horizontalStrokeOpacity: 0.1,
  horizontalStrokeDasharray: '3.3',
}
