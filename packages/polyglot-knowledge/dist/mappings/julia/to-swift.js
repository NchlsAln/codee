"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.juliaToSwiftRules = void 0;
exports.juliaToSwift = juliaToSwift;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("julia", "swift");
function juliaToSwift(code) {
    return (0, mapping_helpers_1.translateWithFallback)("julia", "swift", code);
}
exports.juliaToSwiftRules = rules;
