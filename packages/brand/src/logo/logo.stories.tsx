// -- Required routing using -save-dev storybook-addon-react-router-v6 but is not compatible with storybook 7
import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Logo } from '.'

const meta: Meta<typeof Logo> = {
  title: 'Logo',
  component: Logo,
}

export default meta

type Story = StoryObj<typeof Logo>

export const Primary: Story = {
  args: {
    link: '/not_working_currently',
    sxImage: { height: '32px', width: '200px' },
    sxText: {},
    title: 'Carbon',
  },
}
