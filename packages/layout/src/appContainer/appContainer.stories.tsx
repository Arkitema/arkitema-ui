import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { AppContainer } from '.'
import { BrowserRouter as Router } from 'react-router-dom'
import { Typography } from '@mui/material'
import { theme } from '@arkitema/brand'

const meta: Meta<typeof AppContainer> = {
  title: 'AppContainer',
  component: AppContainer,
}

export default meta

type Story = StoryObj<typeof AppContainer>

export const Primary: Story = {
  args: {
    children: (
      <>
        <Typography
          component='div'
          sx={{
            color: '#333333',
            font: theme.typography.fontFamily,
            fontSize: theme.typography.h1,
            paddingBottom: '20px',
          }}
        >
          {'This is an example'}
        </Typography>
        <Typography
          component='div'
          sx={{
            color: '#333333',
            font: theme.typography.fontFamily,
            fontSize: theme.typography.h5,
            paddingBottom: '20px',
          }}
        >
          {
            'If the app loads as expected, this component will simply load its content. If not, it will render an error as displayed in the error story.'
          }
        </Typography>
      </>
    ),
  },
  decorators: [
    (StoryComponent) => (
      <Router>
        <StoryComponent />
      </Router>
    ),
  ],
}
