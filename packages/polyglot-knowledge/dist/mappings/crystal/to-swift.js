"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crystalToSwiftRules = void 0;
exports.crystalToSwift = crystalToSwift;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("crystal", "swift");
function crystalToSwift(code) {
    return (0, mapping_helpers_1.translateWithFallback)("crystal", "swift", code);
}
exports.crystalToSwiftRules = rules;
