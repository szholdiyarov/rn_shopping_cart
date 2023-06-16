module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import', 'unused-imports'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'unused-imports/no-unused-imports': 'error',
        '@typescript-eslint/no-shadow': ['off'],
        'no-shadow': 'off',
        'no-undef': 'error',
        'sort-imports': [
          'error',
          { ignoreCase: true, ignoreDeclarationSort: true },
        ],
        'import/order': [
          'error',
          {
            groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
            pathGroups: [
              {
                pattern: '@(react|react-native|react-native-**|react-**)',
                group: 'external',
                position: 'before',
              },
              {
                pattern: '(screens/**|components/**|state/**|img/**|text/**)',
                group: 'internal',
              },
            ],
            pathGroupsExcludedImportTypes: ['internal', 'react'],
            'newlines-between': 'always',
            alphabetize: {
              order: 'asc',
              caseInsensitive: true,
            },
          },
        ],
      },
    },
  ],
};
