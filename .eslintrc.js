module.exports = {
  root: true,
  parserOptions: {
    "parser": "babel-eslint",
    "ecmaVersion": 2017,
    "sourceType": "module"
  },
  env: {
    browser: true,
    node: true
  },
  extends: [
    "standard",
    "plugin:vue/recommended"
  ],
  // required to lint *.vue files
  plugins: [
    "vue"
  ],
  // add your custom rules here
  rules: {
    quotes: ["error", "double"],
    semi: ["error", "always"],

    "vue/max-attributes-per-line": [2, {
      "singleline": 2,
      "multiline": {
        "max": 1,
        "allowFirstLine": true
      }
    }]
  },
  globals: {}
}
