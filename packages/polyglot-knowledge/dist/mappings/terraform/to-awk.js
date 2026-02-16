"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.terraformToAwkRules = void 0;
exports.terraformToAwk = terraformToAwk;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("terraform", "awk");
function terraformToAwk(code) {
  return (0, mapping_helpers_1.translateWithFallback)("terraform", "awk", code);
}
exports.terraformToAwkRules = rules;
