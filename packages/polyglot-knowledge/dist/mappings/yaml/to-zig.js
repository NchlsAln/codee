"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.yamlToZigRules = void 0;
exports.yamlToZig = yamlToZig;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("yaml", "zig");
function yamlToZig(code) {
    return (0, mapping_helpers_1.translateWithFallback)("yaml", "zig", code);
}
exports.yamlToZigRules = rules;
