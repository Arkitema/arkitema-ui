import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { PaperPage } from '.'
import { BrowserRouter as Router } from 'react-router-dom'
import { Typography } from '@mui/material'
import { theme } from '@arkitema/brand'

const meta: Meta<typeof PaperPage> = {
  title: 'PaperPage',
  component: PaperPage,
}

export default meta

type Story = StoryObj<typeof PaperPage>

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
          {'About'}
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
            'We create architecture for the many and for the common good. The result is a continuous balancing act between sustainability, beauty, and economy.'
          }
        </Typography>
      </>
    ),
    maxWidth: 'md',
    topPadding: 5,
  },
  decorators: [
    (StoryComponent) => (
      <Router>
        <StoryComponent />
      </Router>
    ),
  ],
}
