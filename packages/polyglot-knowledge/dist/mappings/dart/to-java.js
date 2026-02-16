"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dartToJavaRules = void 0;
exports.dartToJava = dartToJava;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("dart", "java");
function dartToJava(code) {
    return (0, mapping_helpers_1.translateWithFallback)("dart", "java", code);
}
exports.dartToJavaRules = rules;
