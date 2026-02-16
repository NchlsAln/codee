"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scssToHaskellRules = void 0;
exports.scssToHaskell = scssToHaskell;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("scss", "haskell");
function scssToHaskell(code) {
    return (0, mapping_helpers_1.translateWithFallback)("scss", "haskell", code);
}
exports.scssToHaskellRules = rules;
