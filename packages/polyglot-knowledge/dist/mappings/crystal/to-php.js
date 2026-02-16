"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crystalToPhpRules = void 0;
exports.crystalToPhp = crystalToPhp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("crystal", "php");
function crystalToPhp(code) {
    return (0, mapping_helpers_1.translateWithFallback)("crystal", "php", code);
}
exports.crystalToPhpRules = rules;
