"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.phpToCppRules = void 0;
exports.phpToCpp = phpToCpp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("php", "cpp");
function phpToCpp(code) {
    return (0, mapping_helpers_1.translateWithFallback)("php", "cpp", code);
}
exports.phpToCppRules = rules;
