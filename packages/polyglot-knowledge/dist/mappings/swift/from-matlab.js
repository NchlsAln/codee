"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.matlabToSwiftRules = void 0;
exports.matlabToSwift = matlabToSwift;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("matlab", "swift");
function matlabToSwift(code) {
    return (0, mapping_helpers_1.translateWithFallback)("matlab", "swift", code);
}
exports.matlabToSwiftRules = rules;
