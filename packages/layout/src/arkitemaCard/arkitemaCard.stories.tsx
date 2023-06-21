import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ArkitemaCard } from '.'
import { BrowserRouter as Router } from 'react-router-dom'
import { StockImage } from '../../assets'

const meta: Meta<typeof ArkitemaCard> = {
  title: 'ArkitemaCard',
  component: ArkitemaCard,
}

export default meta

type Story = StoryObj<typeof ArkitemaCard>

export const Primary: Story = {
  args: {
    cardKey: 1,
    cardInfo: { id: 'id', title: 'Card Title', subtitle: 'Subtitle', unit: 'CO2', imageUrl: 'URL' },
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
