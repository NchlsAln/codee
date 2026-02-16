"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rToJavaRules = void 0;
exports.rToJava = rToJava;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("r", "java");
function rToJava(code) {
    return (0, mapping_helpers_1.translateWithFallback)("r", "java", code);
}
exports.rToJavaRules = rules;
