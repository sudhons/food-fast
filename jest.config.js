module.exports = {
  clearMocks: true,

  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!public/*.{js}',
    '!src/index.js',
    '!src/store.js',
    '!src/reducers/index.js'
  ],

  collectCoverage: true,

  coverageDirectory: 'coverage-jest',

  coverageReporters: ['html', 'text', 'lcov'],

  moduleFileExtensions: ['js', 'json', 'jsx'],

  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'babel-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/client/src/__mocks__/fileMocks.js',
  },

  setupFiles: ['<rootDir>/enzyme.config.js', 'jest-localstorage-mock'],

  testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],

  testPathIgnorePatterns: ['\\\\node_modules\\\\'],

  testURL: 'http://localhost',

  transformIgnorePatterns: ['<rootDir>/node_modules/'],

  verbose: false,
};
