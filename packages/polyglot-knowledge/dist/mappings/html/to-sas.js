"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.htmlToSasRules = void 0;
exports.htmlToSas = htmlToSas;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("html", "sas");
function htmlToSas(code) {
    return (0, mapping_helpers_1.translateWithFallback)("html", "sas", code);
}
exports.htmlToSasRules = rules;
