"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.juliaToCrystalRules = void 0;
exports.juliaToCrystal = juliaToCrystal;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("julia", "crystal");
function juliaToCrystal(code) {
    return (0, mapping_helpers_1.translateWithFallback)("julia", "crystal", code);
}
exports.juliaToCrystalRules = rules;
