"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cssToJavaRules = void 0;
exports.cssToJava = cssToJava;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("css", "java");
function cssToJava(code) {
    return (0, mapping_helpers_1.translateWithFallback)("css", "java", code);
}
exports.cssToJavaRules = rules;
