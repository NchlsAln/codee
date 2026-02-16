"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.matlabToDartRules = void 0;
exports.matlabToDart = matlabToDart;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("matlab", "dart");
function matlabToDart(code) {
    return (0, mapping_helpers_1.translateWithFallback)("matlab", "dart", code);
}
exports.matlabToDartRules = rules;
