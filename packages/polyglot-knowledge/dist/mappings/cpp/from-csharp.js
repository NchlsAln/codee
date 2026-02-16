"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.csharpToCppRules = void 0;
exports.csharpToCpp = csharpToCpp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("csharp", "cpp");
function csharpToCpp(code) {
    return (0, mapping_helpers_1.translateWithFallback)("csharp", "cpp", code);
}
exports.csharpToCppRules = rules;
