"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.puppetToHaskellRules = void 0;
exports.puppetToHaskell = puppetToHaskell;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("puppet", "haskell");
function puppetToHaskell(code) {
  return (0, mapping_helpers_1.translateWithFallback)("puppet", "haskell", code);
}
exports.puppetToHaskellRules = rules;
