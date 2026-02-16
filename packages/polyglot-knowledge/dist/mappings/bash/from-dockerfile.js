"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dockerfileToBashRules = void 0;
exports.dockerfileToBash = dockerfileToBash;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("dockerfile", "bash");
function dockerfileToBash(code) {
  return (0, mapping_helpers_1.translateWithFallback)("dockerfile", "bash", code);
}
exports.dockerfileToBashRules = rules;
