import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { InformationInput } from '.'

const meta: Meta<typeof InformationInput> = {
  title: 'InformationInput',
  component: InformationInput,
}

export default meta

type Story = StoryObj<typeof InformationInput>

export const Primary: Story = {
  args: {
    label: 'label',
    value: 'value',
    type: 'string',
    options: [],
    sx: {},
  },
}
