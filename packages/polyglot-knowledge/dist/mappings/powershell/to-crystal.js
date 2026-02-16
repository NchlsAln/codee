"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.powershellToCrystalRules = void 0;
exports.powershellToCrystal = powershellToCrystal;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("powershell", "crystal");
function powershellToCrystal(code) {
    return (0, mapping_helpers_1.translateWithFallback)("powershell", "crystal", code);
}
exports.powershellToCrystalRules = rules;
