"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sedToZigRules = void 0;
exports.sedToZig = sedToZig;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("sed", "zig");
function sedToZig(code) {
    return (0, mapping_helpers_1.translateWithFallback)("sed", "zig", code);
}
exports.sedToZigRules = rules;
