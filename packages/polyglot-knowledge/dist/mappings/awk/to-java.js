"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.awkToJavaRules = void 0;
exports.awkToJava = awkToJava;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("awk", "java");
function awkToJava(code) {
    return (0, mapping_helpers_1.translateWithFallback)("awk", "java", code);
}
exports.awkToJavaRules = rules;
