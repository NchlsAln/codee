"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sasToHaskellRules = void 0;
exports.sasToHaskell = sasToHaskell;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("sas", "haskell");
function sasToHaskell(code) {
    return (0, mapping_helpers_1.translateWithFallback)("sas", "haskell", code);
}
exports.sasToHaskellRules = rules;
