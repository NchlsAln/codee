"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.matlabToGoRules = void 0;
exports.matlabToGo = matlabToGo;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("matlab", "go");
function matlabToGo(code) {
    return (0, mapping_helpers_1.translateWithFallback)("matlab", "go", code);
}
exports.matlabToGoRules = rules;
