export {}

// Ignore imports of CSS, SVG, and ICO files during tests
require.extensions['.css'] = () => ({})
require.extensions['.svg'] = () => ({})
require.extensions['.ico'] = () => ({})
