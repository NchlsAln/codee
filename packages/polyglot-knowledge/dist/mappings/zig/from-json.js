"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonToZigRules = void 0;
exports.jsonToZig = jsonToZig;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("json", "zig");
function jsonToZig(code) {
    return (0, mapping_helpers_1.translateWithFallback)("json", "zig", code);
}
exports.jsonToZigRules = rules;
