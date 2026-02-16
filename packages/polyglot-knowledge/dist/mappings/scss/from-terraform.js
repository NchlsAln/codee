"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.terraformToScssRules = void 0;
exports.terraformToScss = terraformToScss;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("terraform", "scss");
function terraformToScss(code) {
  return (0, mapping_helpers_1.translateWithFallback)("terraform", "scss", code);
}
exports.terraformToScssRules = rules;
