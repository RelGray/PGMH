import storybook from "eslint-plugin-storybook";
import globals from 'globals'
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh'
import importPlugin from 'eslint-plugin-import';

import { defineConfig } from 'eslint/config';

export default defineConfig({
  ignores: ['dist'],
},
eslint.configs.recommended,
tseslint.configs.recommended,
importPlugin.flatConfigs.recommended,
reactHooks.configs.flat.recommended,
...storybook.configs['flat/recommended'],
{
  files: [
    'src/**/*.{ts,tsx}'
  ],

  languageOptions: {
    ecmaVersion: 2020,
    globals: globals.browser,
    parserOptions: {
      project: true,
      tsconfigRootDir: import.meta.dirname,
    },
  },

  settings: {
    'import/resolver': {
      typescript: {},
    },
  },

  plugins: {
    'react-refresh': reactRefresh,
  },

  rules: {
    'arrow-body-style': [
      'error',
      'as-needed',
    ],
    'max-statements': [
      'error',
      20
    ],
    'yoda': [
      'error',
      'never',
      {
        "exceptRange": true,
      }
    ],
    'import/no-restricted-paths': [
      'error',
      {
        zones: [
          // enforce unidirectional codebase:

          // e.g. src/app can import from src/features but not the other way around
          {
            target: './src/features',
            from: './src/app',
          },

          // e.g src/features and src/app can import from these shared modules but not the other way around
          {
            target: [
              './src/components',
              './src/hooks',
              './src/lib',
              './src/types',
              './src/utils',
            ],
            from: [
              './src/features',
              './src/app',
            ],
          },
        ],
      },
    ],
  },
});
