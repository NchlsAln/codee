"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sedToCrystalRules = void 0;
exports.sedToCrystal = sedToCrystal;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("sed", "crystal");
function sedToCrystal(code) {
    return (0, mapping_helpers_1.translateWithFallback)("sed", "crystal", code);
}
exports.sedToCrystalRules = rules;
