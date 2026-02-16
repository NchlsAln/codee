"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.htmlToHaskellRules = void 0;
exports.htmlToHaskell = htmlToHaskell;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("html", "haskell");
function htmlToHaskell(code) {
    return (0, mapping_helpers_1.translateWithFallback)("html", "haskell", code);
}
exports.htmlToHaskellRules = rules;
