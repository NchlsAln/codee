"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xmlToAwkRules = void 0;
exports.xmlToAwk = xmlToAwk;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("xml", "awk");
function xmlToAwk(code) {
    return (0, mapping_helpers_1.translateWithFallback)("xml", "awk", code);
}
exports.xmlToAwkRules = rules;
