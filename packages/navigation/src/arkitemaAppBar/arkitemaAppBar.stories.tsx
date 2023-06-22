import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ArkitemaAppBar, LinkItem } from '.'
import { BrowserRouter as Router } from 'react-router-dom'
import { Typography } from '@mui/material'
import { LogoProps, Logo, theme } from '@arkitema/brand'

const meta: Meta<typeof ArkitemaAppBar> = {
  title: 'ArkitemaAppBar',
  component: ArkitemaAppBar,
}

export default meta

type Story = StoryObj<typeof ArkitemaAppBar>

const navItems: LinkItem[] = [
  { link: '/projects', title: 'Projects' },
  { link: '/constructions', title: 'Constructions' },
  { link: '/materials', title: 'Materials' },
]

export const Primary: Story = {
  args: {
    showPageLinks: true,
    navItems: navItems,
    logoProps: { link: '', title: 'Arkitema UI' },
  },
  decorators: [
    (StoryComponent) => (
      <Router>
        <StoryComponent />
      </Router>
    ),
  ],
}
