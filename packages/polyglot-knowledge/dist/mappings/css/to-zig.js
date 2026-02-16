"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cssToZigRules = void 0;
exports.cssToZig = cssToZig;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("css", "zig");
function cssToZig(code) {
    return (0, mapping_helpers_1.translateWithFallback)("css", "zig", code);
}
exports.cssToZigRules = rules;
