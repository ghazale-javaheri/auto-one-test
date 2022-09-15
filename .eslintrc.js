module.exports = {
    parserOptions: {
      project: __dirname + '/tsconfig.json',
      tsconfigRootDir: __dirname,
      createDefaultProgram: true,
      ecmaFeatures: {
        jsx: true,
      },
    },
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'import', 'unused-imports', 'react', 'react-hooks'],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/recommended-requiring-type-checking',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
    ],
    env: {
      jest: true,
      browser: true,
      node: true,
      es6: true,
    },
  }
  