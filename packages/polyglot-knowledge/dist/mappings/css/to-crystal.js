"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cssToCrystalRules = void 0;
exports.cssToCrystal = cssToCrystal;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("css", "crystal");
function cssToCrystal(code) {
    return (0, mapping_helpers_1.translateWithFallback)("css", "crystal", code);
}
exports.cssToCrystalRules = rules;
