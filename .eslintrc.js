module.exports = {
  extends: '@monsantoit/eslint-config-velmat-inventory',
  plugins: ['react'],
  rules: {
    indent: [2,2]
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jasmine: true,
    jest: true
  }
};
