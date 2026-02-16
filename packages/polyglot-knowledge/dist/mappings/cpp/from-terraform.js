"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.terraformToCppRules = void 0;
exports.terraformToCpp = terraformToCpp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("terraform", "cpp");
function terraformToCpp(code) {
  return (0, mapping_helpers_1.translateWithFallback)("terraform", "cpp", code);
}
exports.terraformToCppRules = rules;
