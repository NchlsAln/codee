"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kotlinToSwiftRules = void 0;
exports.kotlinToSwift = kotlinToSwift;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("kotlin", "swift");
function kotlinToSwift(code) {
    return (0, mapping_helpers_1.translateWithFallback)("kotlin", "swift", code);
}
exports.kotlinToSwiftRules = rules;
