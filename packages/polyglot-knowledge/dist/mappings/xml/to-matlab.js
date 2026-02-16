"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xmlToMatlabRules = void 0;
exports.xmlToMatlab = xmlToMatlab;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("xml", "matlab");
function xmlToMatlab(code) {
    return (0, mapping_helpers_1.translateWithFallback)("xml", "matlab", code);
}
exports.xmlToMatlabRules = rules;
