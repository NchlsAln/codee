"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.awkToCppRules = void 0;
exports.awkToCpp = awkToCpp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("awk", "cpp");
function awkToCpp(code) {
    return (0, mapping_helpers_1.translateWithFallback)("awk", "cpp", code);
}
exports.awkToCppRules = rules;
