"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.haskellToCppRules = void 0;
exports.haskellToCpp = haskellToCpp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("haskell", "cpp");
function haskellToCpp(code) {
    return (0, mapping_helpers_1.translateWithFallback)("haskell", "cpp", code);
}
exports.haskellToCppRules = rules;
