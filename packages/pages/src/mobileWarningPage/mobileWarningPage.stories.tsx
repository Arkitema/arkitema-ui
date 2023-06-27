import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { MobileWarningPage } from '.'
import { BrowserRouter as Router } from 'react-router-dom'

const meta: Meta<typeof MobileWarningPage> = {
  title: 'MobileWarningPage',
  component: MobileWarningPage,
}

export default meta

type Story = StoryObj<typeof MobileWarningPage>

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
