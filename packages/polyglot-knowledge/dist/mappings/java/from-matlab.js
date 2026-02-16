"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.matlabToJavaRules = void 0;
exports.matlabToJava = matlabToJava;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("matlab", "java");
function matlabToJava(code) {
    return (0, mapping_helpers_1.translateWithFallback)("matlab", "java", code);
}
exports.matlabToJavaRules = rules;
