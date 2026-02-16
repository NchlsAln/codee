"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sasToCrystalRules = void 0;
exports.sasToCrystal = sasToCrystal;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("sas", "crystal");
function sasToCrystal(code) {
    return (0, mapping_helpers_1.translateWithFallback)("sas", "crystal", code);
}
exports.sasToCrystalRules = rules;
