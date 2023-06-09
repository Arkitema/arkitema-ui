import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ArkitemaCard } from '.'
import { BrowserRouter as Router } from 'react-router-dom'

const meta: Meta<typeof ArkitemaCard> = {
  title: 'ArkitemaCard',
  component: ArkitemaCard,
}

export default meta

type Story = StoryObj<typeof ArkitemaCard>

export const Primary: Story = {
  args: {
    cardKey: 1,
    cardInfo: {
      id: 'id',
      title: 'Kronborg Strandby',
      subtitle: '76',
      unit: 'CO2/m2/year',
      imageUrl: '/kronborg_strandby.png',
    },
    size: 'large',
  },
  decorators: [
    (StoryComponent) => (
      <Router>
        <StoryComponent />
      </Router>
    ),
  ],
}
