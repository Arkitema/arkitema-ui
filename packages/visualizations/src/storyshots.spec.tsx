// / <reference types="vite/client"/>
import { Meta, StoryFn } from '@storybook/react'
import { composeStories } from '@storybook/testing-react'
import { render } from '@testing-library/react'
import { describe, expect, test, vi } from 'vitest'

type StoryFile = {
  default: Meta
  [name: string]: StoryFn | Meta
}

const ResizeObserverMock = vi.fn(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}))

vi.stubGlobal('ResizeObserver', ResizeObserverMock)
describe('Storybook Snapshots', async () => {
  const modules = await Promise.all(Object.values(import.meta.glob<StoryFile>('../**/*.stories.tsx')).map((fn) => fn()))

  describe.each(modules.map((module) => ({ name: module.default.title, module })))('$name', ({ module }) => {
    test.each(Object.values(composeStories(module)).map((Story) => [Story.storyName!, Story]))(
      '%s',
      (storyName, Story) => {
        const { container } = render(<Story />)
        expect(container).toBeTruthy()
        expect(container).toMatchSnapshot()
      },
    )
  })
})