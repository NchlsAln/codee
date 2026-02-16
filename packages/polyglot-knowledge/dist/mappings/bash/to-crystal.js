"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bashToCrystalRules = void 0;
exports.bashToCrystal = bashToCrystal;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("bash", "crystal");
function bashToCrystal(code) {
    return (0, mapping_helpers_1.translateWithFallback)("bash", "crystal", code);
}
exports.bashToCrystalRules = rules;
