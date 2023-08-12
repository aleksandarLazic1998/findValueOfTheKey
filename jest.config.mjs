/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {
  coverageProvider: 'v8',
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
};

export default config;
