"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.matlabToCrystalRules = void 0;
exports.matlabToCrystal = matlabToCrystal;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("matlab", "crystal");
function matlabToCrystal(code) {
    return (0, mapping_helpers_1.translateWithFallback)("matlab", "crystal", code);
}
exports.matlabToCrystalRules = rules;
