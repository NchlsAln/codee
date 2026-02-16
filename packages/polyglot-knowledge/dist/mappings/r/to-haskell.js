"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rToHaskellRules = void 0;
exports.rToHaskell = rToHaskell;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("r", "haskell");
function rToHaskell(code) {
    return (0, mapping_helpers_1.translateWithFallback)("r", "haskell", code);
}
exports.rToHaskellRules = rules;
