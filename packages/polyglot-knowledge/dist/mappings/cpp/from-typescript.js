"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typescriptToCppRules = void 0;
exports.typescriptToCpp = typescriptToCpp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("typescript", "cpp");
function typescriptToCpp(code) {
    return (0, mapping_helpers_1.translateWithFallback)("typescript", "cpp", code);
}
exports.typescriptToCppRules = rules;
