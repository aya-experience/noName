module.exports = {
  setupFiles: [
    './configs/setup/test.setup.js',
  ],
  projects: [
    '<rootDir>/packages/server',
    '<rootDir>/packages/connector',
    '<rootDir>/packages/lib',
    '<rootDir>/packages/native-connector',
  ],
  testPathIgnorePatterns: ['/node_modules/', 'dist'],
};
