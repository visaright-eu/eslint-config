module.exports = {
    overrides: [
        {
            plugins: ['react', 'react-hooks'],
            extends: [
                'plugin:react/recommended',
            ],
            settings: {
                react: {
                    version: 'detect',
                },
            },
            files: ['**/*.{ts,tsx}'],
            rules: {
                'react-hooks/exhaustive-deps': 0,
                'react-hooks/rules-of-hooks': 2,
                'react/display-name': 0,
                'react/no-unescaped-entities': 0,
                'react/prop-types': 0,
                'react/react-in-jsx-scope': 0,
            },
        },
    ],
};
