import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { DataFetchWrapper } from './dataFetchWrapper'
import { BrowserRouter as Router } from 'react-router-dom'
import { ApolloError } from '@apollo/react-hooks'
import { Typography } from '@mui/material'

const meta: Meta<typeof DataFetchWrapper> = {
  title: 'DataFetchWrapper',
  component: DataFetchWrapper,
  argTypes: {
    error: {
      control: {
        type: 'boolean',
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof DataFetchWrapper>

export const Primary: Story = {
  args: {
    loading: false,
    error: new ApolloError({
      graphQLErrors: [],
      protocolErrors: [],
      clientErrors: [],
      networkError: null,
      errorMessage: 'An error occurred',
      extraInfo: {},
    }),
    children: (
      <>
        <Typography variant='h1'>This is an example</Typography>
        <Typography>
          If the data is fetched properly without errors, the contents will be displayed as expected.
        </Typography>
      </>
    ),
  },
  render: (args) => {
    return (
      <Router>
        <DataFetchWrapper
          {...args}
          error={
            args.error
              ? new ApolloError({
                  graphQLErrors: [],
                  protocolErrors: [],
                  clientErrors: [],
                  networkError: null,
                  errorMessage: 'An error occurred',
                  extraInfo: {},
                })
              : undefined
          }
        />
      </Router>
    )
  },
}
