import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { CardGrid } from '.'
import { BrowserRouter as Router } from 'react-router-dom'
import { KronborgStrandby } from '../../.storybook/assets'
import { ArkitemaCard, CardProps } from '../arkitemaCard'

const meta: Meta<typeof CardGrid> = {
  title: 'CardGrid',
  component: CardGrid,
}

export default meta

type Story = StoryObj<typeof CardGrid>

const cardProps: CardProps = {
  cardKey: 1,
  cardInfo: {
    id: 'id',
    title: 'Kronborg Strandby',
    subtitle: '76',
    unit: 'CO2/m2/year',
    imageUrl: KronborgStrandby,
  },
  size: 'small',
}

export const Primary: Story = {
  args: {
    children: (
      <>
        <ArkitemaCard {...cardProps} />
        <ArkitemaCard {...cardProps} />
        <ArkitemaCard {...cardProps} />
        <ArkitemaCard {...cardProps} />
        <ArkitemaCard {...cardProps} />
        <ArkitemaCard {...cardProps} />
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
