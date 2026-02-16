"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typescriptToSwiftRules = void 0;
exports.typescriptToSwift = typescriptToSwift;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("typescript", "swift");
function typescriptToSwift(code) {
    return (0, mapping_helpers_1.translateWithFallback)("typescript", "swift", code);
}
exports.typescriptToSwiftRules = rules;
