"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.yamlToHaskellRules = void 0;
exports.yamlToHaskell = yamlToHaskell;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("yaml", "haskell");
function yamlToHaskell(code) {
    return (0, mapping_helpers_1.translateWithFallback)("yaml", "haskell", code);
}
exports.yamlToHaskellRules = rules;
