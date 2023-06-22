import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { LoginPage } from '.'
import { BrowserRouter as Router } from 'react-router-dom'

const meta: Meta<typeof LoginPage> = {
  title: 'LoginPage',
  component: LoginPage,
}

export default meta

type Story = StoryObj<typeof LoginPage>

export const Primary: Story = {
  args: {
    link: '',
    title: 'Arkitema UI',
  },
  decorators: [
    (StoryComponent) => (
      <Router>
        <StoryComponent />
      </Router>
    ),
  ],
}
