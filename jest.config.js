const ignore = [
  'packages/(connector|native-connector)/dist/',
  'packages/(connector|native-connector|server|lib|cli)/node_modules/',
  '/node_modules/',
];

module.exports = {
  transform: { '^.+\\.js$': '<rootDir>/jestPreprocess.js' },
  coverageDirectory: 'coverage',
  clearMocks: true,
  testEnvironment: 'node',
  testMatch: [
    // '**/__tests__/**/*.js?(x)',
    '**/?(*.)+(spec|test).js?(x)',
  ],
  setupFiles: [
    './configs/setup/test.setup.js',
  ],
  roots: [
    '<rootDir>',
  ],
  testPathIgnorePatterns: ignore,
  coveragePathIgnorePatterns: ignore,
};
