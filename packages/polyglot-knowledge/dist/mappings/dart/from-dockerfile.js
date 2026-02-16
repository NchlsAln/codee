"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dockerfileToDartRules = void 0;
exports.dockerfileToDart = dockerfileToDart;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("dockerfile", "dart");
function dockerfileToDart(code) {
  return (0, mapping_helpers_1.translateWithFallback)("dockerfile", "dart", code);
}
exports.dockerfileToDartRules = rules;
