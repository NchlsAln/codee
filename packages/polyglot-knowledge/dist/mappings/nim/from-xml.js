"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xmlToNimRules = void 0;
exports.xmlToNim = xmlToNim;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("xml", "nim");
function xmlToNim(code) {
    return (0, mapping_helpers_1.translateWithFallback)("xml", "nim", code);
}
exports.xmlToNimRules = rules;
