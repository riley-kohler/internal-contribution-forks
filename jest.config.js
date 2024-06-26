/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.[tj]sx?$',
  testEnvironment: 'node',
  moduleDirectories: ['node_modules', 'src'],
  collectCoverage: true,
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/test/',
    '<rootDir>/src/utils/',
  ],
  transformIgnorePatterns: ['node_modules/(?!(superjson)/)'],
  transform: {
    '^.+\\.(ts|tsx)?$': [
      'ts-jest',
      { configFile: './babel.config.testing.js' },
    ],
    '^.+\\.(js|jsx)$': [
      'babel-jest',
      { configFile: './babel.config.testing.js' },
    ],
  },
}
