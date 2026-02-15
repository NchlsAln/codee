module.exports = {
  preset: "ts-jest/presets/default-esm",
  testEnvironment: "node",
  testMatch: ["<rootDir>/test/**/*.test.ts", "<rootDir>/src/test/**/*.test.ts"],
  moduleFileExtensions: ["ts", "tsx", "js", "json"],
  extensionsToTreatAsEsm: [".ts"],
  transform: {
    "^.+\\.ts$": [
      "ts-jest",
      {
        tsconfig: "<rootDir>/tsconfig.test.json",
        useESM: true,
        diagnostics: false
      }
    ]
  },
  moduleNameMapper: {
    "^@codee/languages$": "<rootDir>/../languages/src",
    "^@codee/lang-common$": "<rootDir>/../languages/common/src",
    "^@codee/lang-typescript$": "<rootDir>/../languages/typescript/src",
    "^@codee/lang-python$": "<rootDir>/../languages/python/src"
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
