import type { Meta, StoryObj } from '@storybook/react'
import { ArkitemaButton } from '.'
import { AccountCircleOutlined } from '@mui/icons-material'

const meta: Meta<typeof ArkitemaButton> = {
  title: 'ArkitemaButton',
  component: ArkitemaButton,
  argTypes: { onClick: { action: 'clicked' } },
}

export default meta

type Story = StoryObj<typeof ArkitemaButton>

export const Enabled: Story = {
  args: {
    disabled: false,
    text: 'Button text',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    text: 'Button text',
  },
}

export const StartIcon: Story = {
  args: {
    disabled: false,
    text: 'Button text',
    startIcon: <AccountCircleOutlined />,
  },
}

export const Loading: Story = {
  args: {
    disabled: false,
    loading: true,
    text: 'Button text',
    startIcon: <AccountCircleOutlined />,
  },
}
