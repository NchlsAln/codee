"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonToHaskellRules = void 0;
exports.jsonToHaskell = jsonToHaskell;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("json", "haskell");
function jsonToHaskell(code) {
    return (0, mapping_helpers_1.translateWithFallback)("json", "haskell", code);
}
exports.jsonToHaskellRules = rules;
