"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rToCppRules = void 0;
exports.rToCpp = rToCpp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("r", "cpp");
function rToCpp(code) {
    return (0, mapping_helpers_1.translateWithFallback)("r", "cpp", code);
}
exports.rToCppRules = rules;
