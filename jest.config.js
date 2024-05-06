/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

// import type { Config } from "jest"
const nextJest = require("next/jest.js")

const createJestConfig = nextJest({
  dir: "./",
})

const config = {
  preset: "ts-jest",
  coverageProvider: "v8",
  collectCoverage: true,
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "^@/src/(.*)$": "<rootDir>/src/$1",
  },
}

// fix issue with `transformIgnorePatterns` being removed by `createJestConfig`
// https://github.com/vercel/next.js/issues/35634#issuecomment-1080942525
module.exports = async () => {
  const nextConfig = await createJestConfig(config)()
  return {
    ...nextConfig,
    transformIgnorePatterns: [
      "/node_modules/.pnpm/(?!(react-hookz|@react-hookz))",
    ],
  }
}
