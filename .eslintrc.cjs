module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  ignorePatterns: ["src/dataAccess/*", "vitest.*.ts"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:import/typescript"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["react", "react-hooks", "@typescript-eslint", "prettier"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-explicit-any": "off",
    camelcase: "error",
    "spaced-comment": ["error", "always", { markers: ["/"] }],
    quotes: ["error", "single"],
    "no-duplicate-imports": "error",
    "prettier/prettier": "error",
    "no-unused-vars": ["error", { "args": "none" }]
  },
  settings: {
    react: {
      version: "detect"
    },
    "import/resolver": {
      typescript: {}
    }
  }
};
