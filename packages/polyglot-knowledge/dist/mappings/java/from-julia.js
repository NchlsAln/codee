"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.juliaToJavaRules = void 0;
exports.juliaToJava = juliaToJava;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("julia", "java");
function juliaToJava(code) {
    return (0, mapping_helpers_1.translateWithFallback)("julia", "java", code);
}
exports.juliaToJavaRules = rules;
