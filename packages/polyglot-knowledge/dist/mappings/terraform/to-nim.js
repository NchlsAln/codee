"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.terraformToNimRules = void 0;
exports.terraformToNim = terraformToNim;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("terraform", "nim");
function terraformToNim(code) {
  return (0, mapping_helpers_1.translateWithFallback)("terraform", "nim", code);
}
exports.terraformToNimRules = rules;
