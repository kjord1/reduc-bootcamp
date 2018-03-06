module.exports = {
  extends: 'airbnb',
  plugins: ['react'],
  rules: {
    "comma-dangle": ["error", "never"],
    "arrow-parens": ["error", "always"],
    "import/prefer-default-export": "warn",
    "no-underscore-dangle": "warn",
    "object-shorthand": ["error", "consistent-as-needed"]
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jasmine: true,
    jest: true
  }
};
