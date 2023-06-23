import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ErrorMessage } from '.'
import { BrowserRouter as Router } from 'react-router-dom'
import { ApolloError } from '@apollo/react-hooks'

const meta: Meta<typeof ErrorMessage> = {
  title: 'ErrorMessage',
  component: ErrorMessage,
}

export default meta

type Story = StoryObj<typeof ErrorMessage>

export const Primary: Story = {
  args: {
    error: new ApolloError({
      graphQLErrors: [],
      protocolErrors: [],
      clientErrors: [],
      networkError: null,
      errorMessage: 'An error occurred',
      extraInfo: {},
    }),
  },
  decorators: [
    (StoryComponent) => (
      <Router>
        <StoryComponent />
      </Router>
    ),
  ],
}
