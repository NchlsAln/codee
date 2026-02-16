"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scssToRRules = void 0;
exports.scssToR = scssToR;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("scss", "r");
function scssToR(code) {
    return (0, mapping_helpers_1.translateWithFallback)("scss", "r", code);
}
exports.scssToRRules = rules;
