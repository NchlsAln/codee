module.exports = {
  preset: "ts-jest/presets/default-esm",
  testEnvironment: "node",
  testMatch: ["<rootDir>/src/test/**/*.test.ts"],
  moduleFileExtensions: ["ts", "tsx", "js", "json"],
  extensionsToTreatAsEsm: [".ts"],
  transform: {
    "^.+\\.ts$": [
      "ts-jest",
      {
        tsconfig: "<rootDir>/tsconfig.json",
        useESM: true
      }
    ]
  },
  moduleNameMapper: {
    "^@codee/lang-common$": "<rootDir>/common/src",
    "^@codee/lang-typescript$": "<rootDir>/typescript/src",
    "^@codee/lang-python$": "<rootDir>/python/src"
  },
  collectCoverageFrom: [
    "<rootDir>/src/**/*.ts",
    "!<rootDir>/src/test/**",
    "!<rootDir>/src/**/*.d.ts"
  ],
  coverageThreshold: {
    global: {
      statements: 50,
      branches: 40,
      functions: 50,
      lines: 50
    }
  }
};
