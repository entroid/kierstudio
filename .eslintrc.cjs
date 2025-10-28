module.exports = {
  root: true,
  env: { browser: true, es2021: true, node: true },
  parser: "@typescript-eslint/parser",
  parserOptions: { ecmaVersion: "latest", sourceType: "module", ecmaFeatures: { jsx: true } },
  settings: { react: { version: "detect" } },
  plugins: ["react", "react-hooks", "@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
    // TSX does not use PropTypes
    "react/prop-types": "off",
    // Allow quotes/apostrophes in text nodes to reduce noise
    "react/no-unescaped-entities": "off",
    // Avoid noise from pasted content or Figma text blocks
    "no-irregular-whitespace": "off",
    // Keep unused vars as warnings; ignore underscores
    "@typescript-eslint/no-unused-vars": [
      "warn",
      { "argsIgnorePattern": "^_", "varsIgnorePattern": "^_", "caughtErrorsIgnorePattern": "^_" }
    ],
  },
  ignorePatterns: ["dist", "build", "node_modules", "coverage"],
};
