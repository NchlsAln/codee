"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.terraformToDartRules = void 0;
exports.terraformToDart = terraformToDart;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("terraform", "dart");
function terraformToDart(code) {
  return (0, mapping_helpers_1.translateWithFallback)("terraform", "dart", code);
}
exports.terraformToDartRules = rules;
