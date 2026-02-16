"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.juliaToHaskellRules = void 0;
exports.juliaToHaskell = juliaToHaskell;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("julia", "haskell");
function juliaToHaskell(code) {
    return (0, mapping_helpers_1.translateWithFallback)("julia", "haskell", code);
}
exports.juliaToHaskellRules = rules;
