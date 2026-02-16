"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.htmlToBashRules = void 0;
exports.htmlToBash = htmlToBash;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("html", "bash");
function htmlToBash(code) {
    return (0, mapping_helpers_1.translateWithFallback)("html", "bash", code);
}
exports.htmlToBashRules = rules;
