"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bashToHaskellRules = void 0;
exports.bashToHaskell = bashToHaskell;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("bash", "haskell");
function bashToHaskell(code) {
    return (0, mapping_helpers_1.translateWithFallback)("bash", "haskell", code);
}
exports.bashToHaskellRules = rules;
