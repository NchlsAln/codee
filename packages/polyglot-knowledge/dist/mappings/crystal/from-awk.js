"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.awkToCrystalRules = void 0;
exports.awkToCrystal = awkToCrystal;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("awk", "crystal");
function awkToCrystal(code) {
    return (0, mapping_helpers_1.translateWithFallback)("awk", "crystal", code);
}
exports.awkToCrystalRules = rules;
