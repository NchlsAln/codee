"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.matlabToCppRules = void 0;
exports.matlabToCpp = matlabToCpp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("matlab", "cpp");
function matlabToCpp(code) {
    return (0, mapping_helpers_1.translateWithFallback)("matlab", "cpp", code);
}
exports.matlabToCppRules = rules;
