"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dockerfileToCppRules = void 0;
exports.dockerfileToCpp = dockerfileToCpp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("dockerfile", "cpp");
function dockerfileToCpp(code) {
  return (0, mapping_helpers_1.translateWithFallback)("dockerfile", "cpp", code);
}
exports.dockerfileToCppRules = rules;
