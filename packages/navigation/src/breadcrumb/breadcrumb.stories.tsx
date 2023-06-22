import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Breadcrumb } from '.'
import { BrowserRouter as Router } from 'react-router-dom'
import { Typography } from '@mui/material'
import { LogoProps, Logo, theme } from '@arkitema/brand'

const meta: Meta<typeof Breadcrumb> = {
  title: 'Breadcrumb',
  component: Breadcrumb,
}

export default meta

type Story = StoryObj<typeof Breadcrumb>

export const Primary: Story = {
  args: {
    projectName: 'Arkitema UI',
    currentPage: 'Settings',
  },
  decorators: [
    (StoryComponent) => (
      <Router>
        <StoryComponent />
      </Router>
    ),
  ],
}
