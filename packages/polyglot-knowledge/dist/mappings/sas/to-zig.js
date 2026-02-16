"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sasToZigRules = void 0;
exports.sasToZig = sasToZig;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("sas", "zig");
function sasToZig(code) {
    return (0, mapping_helpers_1.translateWithFallback)("sas", "zig", code);
}
exports.sasToZigRules = rules;
