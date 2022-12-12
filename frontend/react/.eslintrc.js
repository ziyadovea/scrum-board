module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "react-app", // Uses the recommended rules Create React App
    "plugin:@typescript-eslint/recommended" // Uses the recommended rules from @typescript-eslint/eslint-plugin
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true // Allows for the parsing of JSX
    },
    ecmaVersion: 2022, // Allows for the parsing of modern ECMAScript features
    sourceType: "module" // Allows for the use of imports
  },
  rules: {},
  settings: {
    react: {
      version: "detect" // Tells eslint-plugin-react to automatically detect the version of React to use
    }
  }
};