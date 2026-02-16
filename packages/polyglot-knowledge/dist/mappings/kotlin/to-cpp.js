"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kotlinToCppRules = void 0;
exports.kotlinToCpp = kotlinToCpp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("kotlin", "cpp");
function kotlinToCpp(code) {
    return (0, mapping_helpers_1.translateWithFallback)("kotlin", "cpp", code);
}
exports.kotlinToCppRules = rules;
