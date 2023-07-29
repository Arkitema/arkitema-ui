import type { Meta, StoryObj } from '@storybook/react'
import { InformationInput } from '.'

const meta: Meta<typeof InformationInput> = {
  title: 'InformationInput',
  component: InformationInput,
}

export default meta

type Story = StoryObj<typeof InformationInput>

export const TextField: Story = {
  args: {
    label: 'label',
    value: 'value',
    type: 'string',
    options: [],
    sx: {},
  },
}

export const NumberField: Story = {
  args: {
    label: 'label',
    value: 435,
    type: 'number',
    options: [],
    sx: {},
  },
}

export const Dropdown: Story = {
  args: {
    label: 'label',
    value: 1,
    type: 'number',
    options: [1, 2, 3, 4, 6],
    sx: {},
  },
}
