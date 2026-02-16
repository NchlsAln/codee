"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.matlabToNimRules = void 0;
exports.matlabToNim = matlabToNim;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("matlab", "nim");
function matlabToNim(code) {
    return (0, mapping_helpers_1.translateWithFallback)("matlab", "nim", code);
}
exports.matlabToNimRules = rules;
