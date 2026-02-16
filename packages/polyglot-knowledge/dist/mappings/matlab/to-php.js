"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.matlabToPhpRules = void 0;
exports.matlabToPhp = matlabToPhp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("matlab", "php");
function matlabToPhp(code) {
    return (0, mapping_helpers_1.translateWithFallback)("matlab", "php", code);
}
exports.matlabToPhpRules = rules;
