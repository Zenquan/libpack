module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['eslint-config-prettier', 'eslint:recommended'],
  plugins: ['eslint-plugin-prettier'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
  },
};
