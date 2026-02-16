"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cppToSwiftRules = void 0;
exports.cppToSwift = cppToSwift;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("cpp", "swift");
function cppToSwift(code) {
    return (0, mapping_helpers_1.translateWithFallback)("cpp", "swift", code);
}
exports.cppToSwiftRules = rules;
