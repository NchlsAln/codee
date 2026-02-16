"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.terraformToPhpRules = void 0;
exports.terraformToPhp = terraformToPhp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("terraform", "php");
function terraformToPhp(code) {
  return (0, mapping_helpers_1.translateWithFallback)("terraform", "php", code);
}
exports.terraformToPhpRules = rules;
