"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xmlToBashRules = void 0;
exports.xmlToBash = xmlToBash;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("xml", "bash");
function xmlToBash(code) {
    return (0, mapping_helpers_1.translateWithFallback)("xml", "bash", code);
}
exports.xmlToBashRules = rules;
