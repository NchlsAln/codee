"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swiftToJavaRules = void 0;
exports.swiftToJava = swiftToJava;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("swift", "java");
function swiftToJava(code) {
    return (0, mapping_helpers_1.translateWithFallback)("swift", "java", code);
}
exports.swiftToJavaRules = rules;
