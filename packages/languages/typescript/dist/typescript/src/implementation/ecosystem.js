"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typescriptEcosystem = void 0;
exports.typescriptEcosystem = {
  packageManagers: ["npm", "yarn", "pnpm", "bun"],
  bundlers: ["webpack", "rollup", "esbuild", "vite", "turbopack"],
  buildTools: ["tsc", "swc", "esbuild", "vite", "webpack", "rollup", "tsup"],
  testing: ["jest", "vitest", "playwright", "cypress", "storybook"],
  e2eTesting: ["playwright", "cypress"],
  linting: ["eslint", "typescript-eslint", "prettier", "dprint"],
  formatting: ["prettier", "dprint"],
  typeChecking: ["tsc", "ts-node", "tsx", "swc"],
  monorepos: ["nx", "turborepo", "rush", "pnpm workspaces"],
  docs: ["typedoc", "tsdoc"],
  ciCd: ["GitHub Actions", "GitLab CI", "Azure Pipelines"],
  deploymentTargets: ["serverless", "containers", "edge", "desktop", "mobile"],
  frameworks: ["express", "fastify", "nestjs", "next.js", "react"],
};
