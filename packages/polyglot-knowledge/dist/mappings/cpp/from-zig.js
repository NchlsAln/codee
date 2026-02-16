"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zigToCppRules = void 0;
exports.zigToCpp = zigToCpp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("zig", "cpp");
function zigToCpp(code) {
    return (0, mapping_helpers_1.translateWithFallback)("zig", "cpp", code);
}
exports.zigToCppRules = rules;
