"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.awkToHaskellRules = void 0;
exports.awkToHaskell = awkToHaskell;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("awk", "haskell");
function awkToHaskell(code) {
    return (0, mapping_helpers_1.translateWithFallback)("awk", "haskell", code);
}
exports.awkToHaskellRules = rules;
