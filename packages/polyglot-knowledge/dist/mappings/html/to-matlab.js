"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.htmlToMatlabRules = void 0;
exports.htmlToMatlab = htmlToMatlab;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("html", "matlab");
function htmlToMatlab(code) {
    return (0, mapping_helpers_1.translateWithFallback)("html", "matlab", code);
}
exports.htmlToMatlabRules = rules;
