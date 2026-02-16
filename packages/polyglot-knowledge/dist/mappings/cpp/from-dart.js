"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dartToCppRules = void 0;
exports.dartToCpp = dartToCpp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("dart", "cpp");
function dartToCpp(code) {
    return (0, mapping_helpers_1.translateWithFallback)("dart", "cpp", code);
}
exports.dartToCppRules = rules;
