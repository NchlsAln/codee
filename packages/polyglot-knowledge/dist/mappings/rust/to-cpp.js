"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rustToCppRules = void 0;
exports.rustToCpp = rustToCpp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("rust", "cpp");
function rustToCpp(code) {
    return (0, mapping_helpers_1.translateWithFallback)("rust", "cpp", code);
}
exports.rustToCppRules = rules;
