module.exports = {
  overrides: [
    {
      files: ['**/*.ts'],
      parser: '@typescript-eslint/parser', // Specifies the ESLint parser
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:prettier/recommended',
        'prettier',
        'prettier/@typescript-eslint',
      ],
      rules: {
        '@typescript-eslint/camelcase': 0,
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/interface-name-prefix': 0,
        '@typescript-eslint/no-empty-function': 0,
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            args: 'none',
          },
        ],
        '@typescript-eslint/no-use-before-define': 0,
        'import/no-unused-modules': 2,
        'import/named': 0,
        'import/no-duplicates': 0,
        'import/no-named-as-default': 0,
        'import/no-unresolved': 0,
        'import/order': 1,
        'no-async-promise-executor': 0,
        'no-case-declarations': 0,
        'no-shadow': 1,
        'require-atomic-updates': 0,
        'sort-keys': 1,
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
};
