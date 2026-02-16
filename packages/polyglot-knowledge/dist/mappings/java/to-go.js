"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.javaToGoRules = void 0;
exports.javaToGo = javaToGo;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("java", "go");
function javaToGo(code) {
    return (0, mapping_helpers_1.translateWithFallback)("java", "go", code);
}
exports.javaToGoRules = rules;
