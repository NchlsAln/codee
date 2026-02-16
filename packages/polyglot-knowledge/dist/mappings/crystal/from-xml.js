"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xmlToCrystalRules = void 0;
exports.xmlToCrystal = xmlToCrystal;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("xml", "crystal");
function xmlToCrystal(code) {
    return (0, mapping_helpers_1.translateWithFallback)("xml", "crystal", code);
}
exports.xmlToCrystalRules = rules;
