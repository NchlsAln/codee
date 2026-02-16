export const typescriptEcosystem = {
  packageManagers: ["npm", "yarn", "pnpm", "bun", "deno"],
  buildTools: ["tsc", "swc", "esbuild", "vite", "webpack", "rollup", "tsup"],
  testing: ["jest", "vitest", "mocha", "ava"],
  e2eTesting: ["playwright", "cypress"],
  linting: ["eslint", "typescript-eslint", "biome"],
  formatting: ["prettier", "biome"],
  typeChecking: ["tsc", "tsserver"],
  docs: ["typedoc", "tsdoc"],
  ciCd: ["GitHub Actions", "GitLab CI", "Azure Pipelines"],
  deploymentTargets: ["serverless", "containers", "edge", "desktop", "mobile"],
  frameworks: ["express", "fastify", "nestjs", "next.js", "react"]
};
