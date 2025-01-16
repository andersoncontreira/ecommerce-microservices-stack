/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {

  testEnvironment: "jsdom",
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['ts-jest', {
      useESM: true,
      tsconfig: 'tsconfig.jest.json'
    }],
    // "^.+.tsx?$": ["ts-jest",{ useESM: true,  tsconfig: 'tsconfig.jest.json' }],
    ".+\\.(css|less|sass|scss|png|jpg|gif|ttf|woff|woff2|svg)$":
      "jest-transform-stub",

  },
  coverageReporters: [
    [
        'html',
        {
            subdir: 'coverage_html',
        },
    ],
    'clover',
    'lcov',
    'text',
    'text-summary',
],
collectCoverage: true,
coverageDirectory: './coverage',
collectCoverageFrom: ['src/**/*.{ts,tsx}', 'src/**/**/*.{ts,tsx}', '!src/**/*.d.ts', '!src/**/*.spec.{ts,tsx}', '!src/**/*.e2e.{ts,tsx}'],
};