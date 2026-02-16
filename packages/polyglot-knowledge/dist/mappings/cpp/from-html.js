"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.htmlToCppRules = void 0;
exports.htmlToCpp = htmlToCpp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("html", "cpp");
function htmlToCpp(code) {
    return (0, mapping_helpers_1.translateWithFallback)("html", "cpp", code);
}
exports.htmlToCppRules = rules;
