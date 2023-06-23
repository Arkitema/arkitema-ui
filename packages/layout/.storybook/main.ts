// import type { StorybookConfig } from '@storybook/react-vite';

// const config: StorybookConfig = {
//   framework: '@storybook/react-vite',
//   stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
//   staticDirs: ['../public', '../static', '../.storybook/assets'],
// };

// export default config;


// /** @type { import('@storybook/react-vite').StorybookConfig } */
// const config = {
//   stories: ['../packages/inputs/src/Introduction.mdx', '../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
//   addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
//   framework: {
//     name: '@storybook/react-vite',
//     options: {},
//   },
//   docs: {
//     autodocs: 'tag',
//   },
// }
// export default config


import path from 'path';

const config = {
  stories: [
    '../packages/inputs/src/Introduction.mdx',
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: async (config) => {
    // Add resolve alias for accessing the assets folder inside .storybook
    config.resolve.alias['storybook-assets'] = path.resolve(__dirname, '.storybook/assets');

    // Add file-loader rule for handling image assets
    config.module.rules.push({
      test: /\.(png|jpe?g|gif)$/i,
      use: [
        {
          loader: 'file-loader',
        },
      ],
    });

    return config;
  },
};

export default config;
