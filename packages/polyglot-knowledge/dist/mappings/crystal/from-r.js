"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rToCrystalRules = void 0;
exports.rToCrystal = rToCrystal;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("r", "crystal");
function rToCrystal(code) {
    return (0, mapping_helpers_1.translateWithFallback)("r", "crystal", code);
}
exports.rToCrystalRules = rules;
