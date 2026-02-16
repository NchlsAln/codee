"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ansibleToScssRules = void 0;
exports.ansibleToScss = ansibleToScss;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("ansible", "scss");
function ansibleToScss(code) {
  return (0, mapping_helpers_1.translateWithFallback)("ansible", "scss", code);
}
exports.ansibleToScssRules = rules;
