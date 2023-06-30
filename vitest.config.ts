/// <reference types="vitest" />
/// <reference types="vite/client" />
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['packages/**/src/**/*.spec.{ts,tsx}'],
    deps: {
      inline: ['**/@arkitema/**'],
    },
    setupFiles: './vitest.setup.ts',
    css: false,
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'json-summary', 'json'],
    },
    // silent: true,
  },
})
