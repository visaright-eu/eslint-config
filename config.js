module.exports = {
  overrides: [
    {
      plugins: ['@typescript-eslint', 'react', 'react-hooks', 'import'],
      parser: '@typescript-eslint/parser',
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:prettier/recommended',
      ],
      settings: {
        react: {
          version: 'detect',
        },
      },
      files: ['**/*.{ts,tsx}'],
      rules: {
        '@typescript-eslint/camelcase': 0,
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/interface-name-prefix': 0,
        '@typescript-eslint/no-empty-function': 0,
        '@typescript-eslint/no-explicit-any': 0,
        'no-unused-vars': 0,
        '@typescript-eslint/no-unused-vars': [
          2,
          {
            args: 'none',
          },
        ],
        '@typescript-eslint/no-use-before-define': 0,
        'import/no-unused-modules': 2,
        'import/named': 0,
        'import/no-duplicates': 0,
        'import/no-named-as-default': 0,
        'no-use-before-define': 0,
        'import/no-unresolved': 0,
        'import/order': 1,
        'no-async-promise-executor': 0,
        'no-case-declarations': 0,
        'no-shadow': 0,
        '@typescript-eslint/no-shadow': 1,
        'require-atomic-updates': 0,
        'sort-keys': 1,
        'prettier/prettier': 1,
        '@typescript-eslint/no-misused-promises': 0,
        'react-hooks/exhaustive-deps': 0,
        'react-hooks/rules-of-hooks': 2,
        'react/display-name': 0,
        'react/no-unescaped-entities': 0,
        'react/prop-types': 0,
        'react/react-in-jsx-scope': 0,
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
};
