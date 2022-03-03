"use strict"

const generalRules = {
  complexity: "off",
  "func-style": ["error", "expression"],
  "id-length": ["error", { exceptionPatterns: ["^_$"] }],
  "import/no-unused-modules": "off",
  "import/prefer-default-export": "off",
  "max-statements": "off",
  "no-underscore-dangle": "off",
  "prettier/prettier": "error",
  "sonarjs/cognitive-complexity": "off",
  "sort-keys-fix/sort-keys-fix": ["error", "asc", { natural: true }],

  "unicorn/prevent-abbreviations": [
    "error",
    {
      replacements: {
        props: { properties: false },
        ref: { reference: false },
      },
    },
  ],
}

const typescriptRules = {
  "@typescript-eslint/ban-types": [
    "error",
    {
      types: {
        Function: false,
      },
    },
  ],

  "@typescript-eslint/explicit-member-accessibility": "off",
  "@typescript-eslint/init-declarations": "off",

  "@typescript-eslint/naming-convention": [
    "error",
    {
      format: ["strictCamelCase", "StrictPascalCase"],
      leadingUnderscore: "allow",
      selector: ["default"],
    },
    {
      format: ["StrictPascalCase"],
      selector: ["typeLike", "enumMember"],
    },
    {
      format: ["PascalCase"],
      prefix: ["is", "has", "are", "can", "should", "did", "will"],
      selector: ["variable", "parameter", "property", "accessor"],
      types: ["boolean"],
    },
  ],

  "@typescript-eslint/no-magic-numbers": "off",
  "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_$" }],
  "@typescript-eslint/prefer-function-type": "off",

  "@typescript-eslint/require-array-sort-compare": [
    "error",
    { ignoreStringArrays: true },
  ],

  "@typescript-eslint/strict-boolean-expressions": [
    "error",
    {
      allowNullableString: true,
    },
  ],

  "etc/no-misused-generics": "off",
  "etc/no-t": "off",
}

module.exports = {
  env: {
    es2022: true,
  },

  extends: ["hardcore", "prettier"],

  ignorePatterns: ["build", "node_modules"],

  overrides: [
    {
      env: {
        browser: true,
        es2022: true,
      },

      extends: ["hardcore", "hardcore/ts", "prettier"],

      files: "*.ts",

      parser: "@typescript-eslint/parser",

      parserOptions: {
        ecmaVersion: "latest",
        project: "./tsconfig.json",
        sourceType: "module",
      },

      rules: { ...generalRules, ...typescriptRules },
    },
    {
      env: {
        browser: true,
        es2022: true,
      },

      extends: [
        "react-app",
        "hardcore",
        "hardcore/react",
        "hardcore/ts",
        "prettier",
      ],

      files: "*.tsx",

      parser: "@typescript-eslint/parser",

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },

        ecmaVersion: "latest",

        project: "./tsconfig.json",

        sourceType: "module",
      },

      rules: {
        ...generalRules,
        ...typescriptRules,
        "@shopify/jsx-prefer-fragment-wrappers": "off",
        "react/forbid-component-props": "off",

        "react/function-component-definition": [
          "error",
          {
            namedComponents: "arrow-function",
            unnamedComponents: "arrow-function",
          },
        ],

        "react/jsx-no-bind": [
          "error",
          {
            allowArrowFunctions: true,
          },
        ],

        "react/jsx-props-no-spreading": "off",
        "react-perf/jsx-no-jsx-as-prop": "off",
        "react-perf/jsx-no-new-array-as-prop": "off",
        "react-perf/jsx-no-new-object-as-prop": "off",
      },
    },
    {
      env: {
        es2022: true,
        node: true,
      },

      files: ["config-overrides.js", ".eslintrc.js"],

      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "script",
      },

      rules: {
        "import/no-commonjs": "off",

        "import/no-extraneous-dependencies": [
          "error",
          { devDependencies: true },
        ],

        "putout/putout": [
          "error",
          {
            rules: {
              "convert-commonjs-to-esm": "off",
            },
          },
        ],

        "unicorn/prefer-module": "off",
      },
    },
  ],

  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },

  plugins: ["prettier", "sort-keys-fix"],

  rules: generalRules,
}
