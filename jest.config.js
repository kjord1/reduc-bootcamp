module.exports = {
  automock: true,
  resetMocks: true,
  resetModules: true,
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  coverageReporters: ['html', 'json-summary'],
  unmockedModulePathPatterns: [
    '<rootDir>/node_modules/prop-types',
    '<rootDir>/node_modules/react',
    '<rootDir>/node_modules/react-dom',
    '<rootDir>/node_modules/react-redux'
  ]
};
