module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    quotes: ["off", "double"],
    semi: ["error", "always"],
    eqeqeq: "off",
    "react/no-unescaped-entities": "off",
    "react/prop-types": 0,
  },
};
