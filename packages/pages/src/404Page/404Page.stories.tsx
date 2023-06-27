import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { NotFoundPage } from '.'
import { BrowserRouter as Router } from 'react-router-dom'

const meta: Meta<typeof NotFoundPage> = {
  title: 'NotFoundPage',
  component: NotFoundPage,
}

export default meta

type Story = StoryObj<typeof NotFoundPage>

export const Primary: Story = {
  args: {},
  decorators: [
    (StoryComponent) => (
      <Router>
        <StoryComponent />
      </Router>
    ),
  ],
}
