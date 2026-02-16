"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scssToZigRules = void 0;
exports.scssToZig = scssToZig;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("scss", "zig");
function scssToZig(code) {
    return (0, mapping_helpers_1.translateWithFallback)("scss", "zig", code);
}
exports.scssToZigRules = rules;
