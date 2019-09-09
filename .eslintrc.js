module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true,
    jest: true
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2019,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": false,
    },
    "project": "./tsconfig.json",
  },
  "plugins": [
    "@typescript-eslint/tslint"
  ],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/@typescript-eslint",
    "wolox"
  ],
  globals: {
    __DEV__: true
  },
  rules: {
    "arrow-parens": ["error", "as-needed"],
    "arrow-spacing": ['error', { before: true, after: true }],
    "max-len": ["error", { "code": 120 }],
    "max-nested-callbacks": 0,
    "max-params": ["error", 4],

    // TS LINT
    "@typescript-eslint/array-type": "array",
    "camelcase": "off",
    "@typescript-eslint/camelcase": ["error", { "properties": "always" }],
    "@typescript-eslint/class-name-casing": ["error", { "allowUnderscorePrefix": true }],
    "@typescript-eslint/consistent-type-assertions": "warning",
    // "@typescript-eslint/consistent-type-definitions": ["error", "type"], TODO: revisar si se puede definir sequelize sin Interface
    "@typescript-eslint/explicit-function-return-type": ["error"],
    "@typescript-eslint/explicit-member-accessibility": ["error"],
    "func-call-spacing": "off",
    "@typescript-eslint/func-call-spacing": ["error"],
    "@typescript-eslint/interface-name-prefix": ["error", { "prefixWithI": "always" }],
    "indent": "off",
    "@typescript-eslint/indent": ["error", 2],
    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": "error",
    "@typescript-eslint/no-empty-interface": ["error", { "allowSingleExtends": false }],
    "no-extra-parens": "off",
    "@typescript-eslint/no-extra-parens": [
      "error",
      "all",
      {
        ignoreJSX: "all",
        enforceForArrowConditionals: false,
        returnAssign: false
      }
    ],
    "@typescript-eslint/no-extraneous-class": ["error"],
    "@typescript-eslint/no-floating-promises": ["error"],
    "no-magic-numbers": "off",
    "@typescript-eslint/no-magic-numbers": ["error", {ignore: [0, 1, -1]}],
    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/no-misused-promises": ["error"],
    '@typescript-eslint/no-this-alias': ['error',{ allowDestructuring: true }],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    "no-useless-constructor": "off",
    "@typescript-eslint/no-useless-constructor": "error",
    "@typescript-eslint/prefer-includes": "error",
    "@typescript-eslint/prefer-readonly": ["error"],
    "@typescript-eslint/prefer-string-starts-ends-with": "error",
    "quotes": "off",
    "@typescript-eslint/quotes": ["error",  "single", { avoidEscape: true }],
    "require-await": "off",
    "@typescript-eslint/require-await": "error",
    "@typescript-eslint/restrict-plus-operands": "error",
    "semi": "off",
    "@typescript-eslint/semi": ["error"],
    "@typescript-eslint/type-annotation-spacing": ["error", {before: false, after: true}],
    "@typescript-eslint/unbound-method": [ "error"],
    "@typescript-eslint/no-explicit-any": ["error", { "ignoreRestArgs": true }]
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js"]
      }
    }
  }
};
