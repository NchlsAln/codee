"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xmlToCppRules = void 0;
exports.xmlToCpp = xmlToCpp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("xml", "cpp");
function xmlToCpp(code) {
    return (0, mapping_helpers_1.translateWithFallback)("xml", "cpp", code);
}
exports.xmlToCppRules = rules;
