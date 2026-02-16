"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sqlToHaskellRules = void 0;
exports.sqlToHaskell = sqlToHaskell;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("sql", "haskell");
function sqlToHaskell(code) {
    return (0, mapping_helpers_1.translateWithFallback)("sql", "haskell", code);
}
exports.sqlToHaskellRules = rules;
