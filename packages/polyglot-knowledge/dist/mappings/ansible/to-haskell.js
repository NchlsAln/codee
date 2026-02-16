"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ansibleToHaskellRules = void 0;
exports.ansibleToHaskell = ansibleToHaskell;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("ansible", "haskell");
function ansibleToHaskell(code) {
  return (0, mapping_helpers_1.translateWithFallback)("ansible", "haskell", code);
}
exports.ansibleToHaskellRules = rules;
