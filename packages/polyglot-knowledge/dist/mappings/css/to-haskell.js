"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cssToHaskellRules = void 0;
exports.cssToHaskell = cssToHaskell;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("css", "haskell");
function cssToHaskell(code) {
    return (0, mapping_helpers_1.translateWithFallback)("css", "haskell", code);
}
exports.cssToHaskellRules = rules;
