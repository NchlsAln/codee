"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.haskellToPythonRules = void 0;
exports.haskellToPython = haskellToPython;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("haskell", "python");
function haskellToPython(code) {
    return (0, mapping_helpers_1.translateWithFallback)("haskell", "python", code);
}
exports.haskellToPythonRules = rules;
