"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dockerfileToScssRules = void 0;
exports.dockerfileToScss = dockerfileToScss;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("dockerfile", "scss");
function dockerfileToScss(code) {
  return (0, mapping_helpers_1.translateWithFallback)("dockerfile", "scss", code);
}
exports.dockerfileToScssRules = rules;
