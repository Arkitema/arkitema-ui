import type { Meta, StoryObj } from '@storybook/react'
import { ArkitemaTable } from '.'

const meta: Meta<typeof ArkitemaTable> = {
  title: 'ArkitemaTable',
  component: ArkitemaTable,
}

export default meta

type Story = StoryObj<typeof ArkitemaTable>

export const Primary: Story = {
  args: {
    data: { 'Row 1 ': 'row 1', 'Row 2': 'row 2' },
  },
}
