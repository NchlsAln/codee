"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rubyToJavaRules = void 0;
exports.rubyToJava = rubyToJava;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("ruby", "java");
function rubyToJava(code) {
    return (0, mapping_helpers_1.translateWithFallback)("ruby", "java", code);
}
exports.rubyToJavaRules = rules;
