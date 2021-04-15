module.exports = {
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      plugins: [
        '@typescript-eslint',
        'react',
        'react-hooks',
        'import',
        'prettier',
      ],
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
        'prettier',
      ],
      settings: {
        react: {
          version: 'detect',
        },
      },
      rules: {
        '@typescript-eslint/camelcase': 0,
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/no-misused-promises': 0,
        '@typescript-eslint/no-unused-vars': [
          1,
          {
            args: 'none',
          },
        ],
        '@typescript-eslint/no-use-before-define': 0,
        'import/named': 0,
        'import/no-duplicates': 0,
        'import/no-named-as-default': 0,
        'import/no-unresolved': 0,
        'import/order': 1,
        'no-async-promise-executor': 0,
        'no-shadow': 1,
        'react-hooks/exhaustive-deps': 0,
        'react-hooks/rules-of-hooks': 2,
        'react/display-name': 0,
        'react/no-unescaped-entities': 0,
        'react/prop-types': 0,
      },
    },
  ],
};
