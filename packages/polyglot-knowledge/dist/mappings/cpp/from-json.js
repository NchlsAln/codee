"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonToCppRules = void 0;
exports.jsonToCpp = jsonToCpp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("json", "cpp");
function jsonToCpp(code) {
    return (0, mapping_helpers_1.translateWithFallback)("json", "cpp", code);
}
exports.jsonToCppRules = rules;
