module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018, // Allow to parse modern ECMAScript features
    sourceType: 'module', // Allow to use imports
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  rules: {
    semi: 0,
    'ordered-imports': 0,
    'object-literal-sort-keys': 0,
    'member-ordering': 0,
    'jsx-no-lambda': 0,
    'jsx-boolean-value': 0,
    'no-console': 0,
    'no-empty-interface': 0,
    'interface-name': [0, 'always-prefix'],
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/explicit-function-return-type': [
      'warn',
      {
        'allowExpressions': 1,
        'allowTypedFunctionExpressions': 1
      }
    ]
  },
  env: {
    es6: true,
    node: true,
  }
}