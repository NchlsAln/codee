"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dockerfileToAwkRules = void 0;
exports.dockerfileToAwk = dockerfileToAwk;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("dockerfile", "awk");
function dockerfileToAwk(code) {
  return (0, mapping_helpers_1.translateWithFallback)("dockerfile", "awk", code);
}
exports.dockerfileToAwkRules = rules;
