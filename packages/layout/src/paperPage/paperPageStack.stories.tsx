import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { PaperPageStack, PaperPage } from '.'
import { BrowserRouter as Router } from 'react-router-dom'
import { Typography } from '@mui/material'
import { theme } from '@arkitema/brand'

const meta: Meta<typeof PaperPageStack> = {
  title: 'PaperPageStack',
  component: PaperPageStack,
}

export default meta

type Story = StoryObj<typeof PaperPageStack>

const paperPageChild = (
  <PaperPage>
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
  </PaperPage>
)

export const Primary: Story = {
  args: {
    children: (
      <>
        {paperPageChild}
        {paperPageChild}
        {paperPageChild}
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
