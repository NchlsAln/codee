"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zigToDartRules = void 0;
exports.zigToDart = zigToDart;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("zig", "dart");
function zigToDart(code) {
    return (0, mapping_helpers_1.translateWithFallback)("zig", "dart", code);
}
exports.zigToDartRules = rules;
