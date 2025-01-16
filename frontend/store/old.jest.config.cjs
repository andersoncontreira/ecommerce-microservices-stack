const { pathsToModuleNameMapper } = require("ts-jest");
const { compilerOptions } = require("./tsconfig.jest");


module.exports = {
    roots: ["<rootDir>"],
    // globals: {
    //     'ts-jest': {
    //         tsConfig: 'tsconfig.jest.json'
    //     }
    // },
    preset: 'ts-jest',
    transform: {
        // "^.+\\.tsx?$": "ts-jest"
        //'^.+\\.(js|jsx|ts|tsx)$': 'ts-jest',
        // '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
        // ".(js|jsx)": "babel-jest",
        //".(ts|tsx)": "ts-jest"

        '^.+\\.(js|jsx|ts|tsx)$': ['ts-jest', {
            tsConfig: 'tsconfig.jest.json'
        }],
        ".+\\.(css|less|sass|scss|png|jpg|gif|ttf|woff|woff2|svg)$":
            "jest-transform-stub",
    },
    testEnvironment: 'jsdom',
    // moduleNameMapper: {
    //     '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    //     '\\.(gif|ttf|eot|png)$': '<rootDir>/__mocks__/fileMock.js',
    //     "^.+\\.svg$": "jest-svg-transformer",
    // },
    modulePaths: [compilerOptions.baseUrl],
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths ?? {}),
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
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
    collectCoverage: false,
    coverageDirectory: './coverage',
    collectCoverageFrom: ['src/**/*.{ts,tsx}', 'src/**/**/*.{ts,tsx}', '!src/**/*.d.ts', '!src/**/*.spec.{ts,tsx}', '!src/**/*.e2e.{ts,tsx}'],
};