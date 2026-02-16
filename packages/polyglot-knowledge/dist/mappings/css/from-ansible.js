"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ansibleToCssRules = void 0;
exports.ansibleToCss = ansibleToCss;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("ansible", "css");
function ansibleToCss(code) {
  return (0, mapping_helpers_1.translateWithFallback)("ansible", "css", code);
}
exports.ansibleToCssRules = rules;
