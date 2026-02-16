"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.terraformToHaskellRules = void 0;
exports.terraformToHaskell = terraformToHaskell;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("terraform", "haskell");
function terraformToHaskell(code) {
  return (0, mapping_helpers_1.translateWithFallback)("terraform", "haskell", code);
}
exports.terraformToHaskellRules = rules;
