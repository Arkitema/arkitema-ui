import type { StorybookConfig } from '@storybook/react-vite'
const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../packages/visualisations/src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
    '../packages/visualisations/src/**/*.stories.@(js|jsx|ts|tsx)',
    '../packages/visualisations/src/pieChart/**/*.stories.@(js|jsx|ts|tsx)',
  ],

  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
}
export default config
