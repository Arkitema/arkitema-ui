import type { Preview } from '@storybook/react'
import { withThemeFromJSXProvider } from "@storybook/addon-styling";
import { theme } from "@arkitema/brand";
import { CssBaseline, ThemeProvider } from "@mui/material";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      default: theme,
    },
    defaultTheme: "theme",
    Provider: ThemeProvider,
    GlobalStyles: CssBaseline,
  }),
];

export default preview
