import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Loading } from '.'
import { BrowserRouter as Router } from 'react-router-dom'

const meta: Meta<typeof Loading> = {
  title: 'Loading',
  component: Loading,
}

export default meta

type Story = StoryObj<typeof Loading>

export const Primary: Story = {
  args: {
    loading: true,
  },
  decorators: [
    (StoryComponent) => (
      <Router>
        <StoryComponent />
      </Router>
    ),
  ],
}
