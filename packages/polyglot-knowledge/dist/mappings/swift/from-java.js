"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.javaToSwiftRules = void 0;
exports.javaToSwift = javaToSwift;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("java", "swift");
function javaToSwift(code) {
    return (0, mapping_helpers_1.translateWithFallback)("java", "swift", code);
}
exports.javaToSwiftRules = rules;
