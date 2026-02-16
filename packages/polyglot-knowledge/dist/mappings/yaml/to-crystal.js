"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.yamlToCrystalRules = void 0;
exports.yamlToCrystal = yamlToCrystal;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("yaml", "crystal");
function yamlToCrystal(code) {
    return (0, mapping_helpers_1.translateWithFallback)("yaml", "crystal", code);
}
exports.yamlToCrystalRules = rules;
