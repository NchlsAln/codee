"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dockerfileToCssRules = void 0;
exports.dockerfileToCss = dockerfileToCss;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("dockerfile", "css");
function dockerfileToCss(code) {
  return (0, mapping_helpers_1.translateWithFallback)("dockerfile", "css", code);
}
exports.dockerfileToCssRules = rules;
