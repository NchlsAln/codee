"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.goToCppRules = void 0;
exports.goToCpp = goToCpp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("go", "cpp");
function goToCpp(code) {
    return (0, mapping_helpers_1.translateWithFallback)("go", "cpp", code);
}
exports.goToCppRules = rules;
