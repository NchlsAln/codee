"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.haskellToDartRules = void 0;
exports.haskellToDart = haskellToDart;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("haskell", "dart");
function haskellToDart(code) {
    return (0, mapping_helpers_1.translateWithFallback)("haskell", "dart", code);
}
exports.haskellToDartRules = rules;
