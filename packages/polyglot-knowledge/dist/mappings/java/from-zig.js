"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zigToJavaRules = void 0;
exports.zigToJava = zigToJava;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("zig", "java");
function zigToJava(code) {
    return (0, mapping_helpers_1.translateWithFallback)("zig", "java", code);
}
exports.zigToJavaRules = rules;
