import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact, { rules } from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
    { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    {
        settings: {
            react: {
                version: "detect", 
            },
        },
        rules: {
            '@typescript-eslint/naming-convention': 'off',
            'react/jsx-indent': [2, 4],
            'react/jsx-indent-props': [2, 4],
            indent: [2, 4],
            'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
            'import/no-unresolved': 'off',
            'import/prefer-default-export': 'off',
            'no-unused-vars': 'warn',
            'react/require-default-props': 'off',
            'react/react-in-jsx-scope': 'off',
            'react/jsx-props-no-spreading': 'warn',
            'react/function-component-definition': 'off',
            'no-shadow': 'off',
            'import/extensions': 'off',
            'import/no-extraneous-dependencies': 'off',
            'no-underscore-dangle': 'off',
            'i18next/no-literal-string': [
                'error',
                {
                    markupOnly: true,
                    ignoreAttribute: ['data-testid'],
                }
            ],
            'overrides': [
                {
                    files: ['**/src/**/*.test.{ts,tsx}'],
                    rules: {
                        'i18next/no-literal-string': 'off',
                    }
                }
            ]

            // ============= THIS IS ERRORS IN BUILDS ================
            // ============= TO DO: ADD BUILD IN GITIGNORE  =================
            "@typescript-eslint/no-unused-vars": "off",
            "no-constant-condition": "off",
            "@typescript-eslint/no-unused-expressions": "off",
            'no-prototype-builtins': 'off', 
            'no-misleading-character-class': 'off', 
            'no-self-assign': 'off', 
            'no-empty': 'off', 
            'no-fallthrough': 'off', 
            'no-unreachable': 'off', 
            'react-internal/no-production-logging': 'off', 
            'no-func-assign': 'off', 
            'no-constant-binary-expression': 'off', 
            'no-cond-assign': 'off', 
            'no-control-regex': 'off', 
            "no-useless-escape": "off",
            "no-dupe-keys": "off",
            "no-redeclare": "off",
            "react-hooks/rules-of-hooks": "off",
            "@typescript-eslint/ban-ts-comment": "off",
            "getter-return": "off",
            "valid-typeof": "off",
            "react-hooks/exhaustive-deps": "off",
            "jsx-a11y/anchor-has-content": "off",
            "react-hooks/rules-of-hooks": "off",
            'import/no-unresolved': 'off',
            'import/prefer-default-export': 'off',
            'no-unused-vars': 'warn',
            'react/require-default-props': 'off',
            'react/react-in-jsx-scope': 'off',
            'react/jsx-props-no-spreading': 'warn',
            'react/function-component-definition': 'off',
            'no-shadow': 'off',
            'import/extensions': 'off',
            'import/no-extraneous-dependencies': 'off',
            'no-underscore-dangle': 'off',
        },
    },
];