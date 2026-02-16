"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scssToCrystalRules = void 0;
exports.scssToCrystal = scssToCrystal;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("scss", "crystal");
function scssToCrystal(code) {
    return (0, mapping_helpers_1.translateWithFallback)("scss", "crystal", code);
}
exports.scssToCrystalRules = rules;
