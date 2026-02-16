"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.matlabToHaskellRules = void 0;
exports.matlabToHaskell = matlabToHaskell;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("matlab", "haskell");
function matlabToHaskell(code) {
    return (0, mapping_helpers_1.translateWithFallback)("matlab", "haskell", code);
}
exports.matlabToHaskellRules = rules;
