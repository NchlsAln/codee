"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.puppetRuntime = void 0;
exports.puppetRuntime = {
  name: "Puppet runtime",
  supportedVersions: ["7", "8"],
  executionModel: {
    compilation: "Catalog compiled on server",
    agent: "Agent applies catalog on nodes",
    transport: "SSL/TLS communication",
  },
  dependencies: ["Ruby"],
  performance: {
    notes: ["Keep catalogs small", "Use selective runs", "Avoid heavy facts"],
  },
};
