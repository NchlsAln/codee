"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.htmlToZigRules = void 0;
exports.htmlToZig = htmlToZig;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("html", "zig");
function htmlToZig(code) {
    return (0, mapping_helpers_1.translateWithFallback)("html", "zig", code);
}
exports.htmlToZigRules = rules;
