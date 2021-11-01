module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  parser: 'babel-eslint',
  plugins: ['react'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended', 'prettier/react'],
  rules: {
    semi: false,
  },
}
