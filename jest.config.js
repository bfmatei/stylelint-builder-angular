module.exports = {
  bail: true,
  collectCoverageFrom: ['src/**/*.ts'],
  coverageReporters: ['lcovonly', 'html'],
  globals: {
    'ts-jest': {
      tsConfigFile: './test/tsconfig.json'
    }
  },
  moduleFileExtensions: ['js', 'json', 'ts'],
  modulePathIgnorePatterns: ['/dist/', '/node_modules/'],
  testRegex: '.*spec.ts$',
  transform: {
    '.ts$': 'ts-jest'
  },
  transformIgnorePatterns: ['/dist/', '/node_modules/']
};
