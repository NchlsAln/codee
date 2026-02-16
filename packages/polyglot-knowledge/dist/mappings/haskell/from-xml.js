"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xmlToHaskellRules = void 0;
exports.xmlToHaskell = xmlToHaskell;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("xml", "haskell");
function xmlToHaskell(code) {
    return (0, mapping_helpers_1.translateWithFallback)("xml", "haskell", code);
}
exports.xmlToHaskellRules = rules;
