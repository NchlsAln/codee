"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crystalToGoRules = void 0;
exports.crystalToGo = crystalToGo;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("crystal", "go");
function crystalToGo(code) {
    return (0, mapping_helpers_1.translateWithFallback)("crystal", "go", code);
}
exports.crystalToGoRules = rules;
