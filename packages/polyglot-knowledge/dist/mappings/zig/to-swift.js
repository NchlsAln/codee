"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zigToSwiftRules = void 0;
exports.zigToSwift = zigToSwift;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("zig", "swift");
function zigToSwift(code) {
    return (0, mapping_helpers_1.translateWithFallback)("zig", "swift", code);
}
exports.zigToSwiftRules = rules;
