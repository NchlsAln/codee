"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonToCrystalRules = void 0;
exports.jsonToCrystal = jsonToCrystal;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("json", "crystal");
function jsonToCrystal(code) {
    return (0, mapping_helpers_1.translateWithFallback)("json", "crystal", code);
}
exports.jsonToCrystalRules = rules;
