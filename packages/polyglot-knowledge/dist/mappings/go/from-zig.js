"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zigToGoRules = void 0;
exports.zigToGo = zigToGo;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("zig", "go");
function zigToGo(code) {
    return (0, mapping_helpers_1.translateWithFallback)("zig", "go", code);
}
exports.zigToGoRules = rules;
