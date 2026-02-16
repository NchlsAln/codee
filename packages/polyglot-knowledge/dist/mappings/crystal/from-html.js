"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.htmlToCrystalRules = void 0;
exports.htmlToCrystal = htmlToCrystal;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("html", "crystal");
function htmlToCrystal(code) {
    return (0, mapping_helpers_1.translateWithFallback)("html", "crystal", code);
}
exports.htmlToCrystalRules = rules;
