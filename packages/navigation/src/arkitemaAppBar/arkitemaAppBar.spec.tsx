import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { ArkitemaAppBar } from './arkitemaAppBar'
import { appBarMock } from '../../__mocks__/appBar.mock'
import React from 'react'

describe('Arkitema App Bar', () => {
  it('should render settings successfully', async () => {
    expect(true).toBeTruthy()
  })
})
describe('Arkitema App Bar', () => {
  it('should render settings successfully', async () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/projects/acfa456f-6628-4c0d-a0c8-1a53b1a46785/settings']}>
        <Routes>
          <Route path='/projects/:projectId/settings' element={<ArkitemaAppBar {...appBarMock} />} />
        </Routes>
      </MemoryRouter>,
    )
    expect(container).toBeDefined()
    expect(await screen.findByText('My Project')).toBeInTheDocument()
    expect(await screen.findByText('Settings')).toBeInTheDocument()
  })

  it('should render settings successfully', async () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/projects/acfa456f-6628-4c0d-a0c8-1a53b1a46785/settings']}>
        <Routes>
          <Route path='/projects/:projectId/settings' element={<ArkitemaAppBar {...appBarMock} />} />
        </Routes>
      </MemoryRouter>,
    )
    expect(container).toBeDefined()
    expect(await screen.findByText('My Project')).toBeInTheDocument()
    expect(await screen.findByText('Settings')).toBeInTheDocument()
  })

  it('should render assemblies successfully', async () => {
    const { baseElement } = render(
      <MemoryRouter initialEntries={['/projects/acfa456f-6628-4c0d-a0c8-1a53b1a46785/assemblies']}>
        <Routes>
          <Route path='/projects/:projectId/assemblies' element={<ArkitemaAppBar {...appBarMock} />} />
        </Routes>
      </MemoryRouter>,
    )
    expect(baseElement).toBeDefined()
    expect(await screen.findByText('My Project')).toBeInTheDocument()
    expect(await screen.findByText('Assemblies')).toBeInTheDocument()
  })

  it('should render members successfully', async () => {
    const { baseElement } = render(
      <MemoryRouter initialEntries={['/projects/acfa456f-6628-4c0d-a0c8-1a53b1a46785/members']}>
        <Routes>
          <Route path='/projects/:projectId/members' element={<ArkitemaAppBar {...appBarMock} />} />
        </Routes>
      </MemoryRouter>,
    )
    expect(baseElement).toBeDefined()
    expect(await screen.findByText('My Project')).toBeInTheDocument()
    expect(await screen.findByText('Members')).toBeInTheDocument()
  })

  it('should render inventory successfully', async () => {
    const { baseElement } = render(
      <MemoryRouter initialEntries={['/projects/acfa456f-6628-4c0d-a0c8-1a53b1a46785/inventory']}>
        <Routes>
          <Route path='/projects/:projectId/inventory' element={<ArkitemaAppBar {...appBarMock} />} />
        </Routes>
      </MemoryRouter>,
    )
    expect(baseElement).toBeDefined()
    expect(await screen.findByText('My Project')).toBeInTheDocument()
    expect(await screen.findByText('Inventory')).toBeInTheDocument()
  })
})
