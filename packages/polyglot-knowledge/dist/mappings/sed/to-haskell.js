"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sedToHaskellRules = void 0;
exports.sedToHaskell = sedToHaskell;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("sed", "haskell");
function sedToHaskell(code) {
    return (0, mapping_helpers_1.translateWithFallback)("sed", "haskell", code);
}
exports.sedToHaskellRules = rules;
