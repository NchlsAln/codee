"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.csharpToSwiftRules = void 0;
exports.csharpToSwift = csharpToSwift;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("csharp", "swift");
function csharpToSwift(code) {
    return (0, mapping_helpers_1.translateWithFallback)("csharp", "swift", code);
}
exports.csharpToSwiftRules = rules;
