"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xmlToZigRules = void 0;
exports.xmlToZig = xmlToZig;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("xml", "zig");
function xmlToZig(code) {
    return (0, mapping_helpers_1.translateWithFallback)("xml", "zig", code);
}
exports.xmlToZigRules = rules;
