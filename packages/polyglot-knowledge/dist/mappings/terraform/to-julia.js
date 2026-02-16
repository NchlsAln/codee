"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.terraformToJuliaRules = void 0;
exports.terraformToJulia = terraformToJulia;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("terraform", "julia");
function terraformToJulia(code) {
  return (0, mapping_helpers_1.translateWithFallback)("terraform", "julia", code);
}
exports.terraformToJuliaRules = rules;
