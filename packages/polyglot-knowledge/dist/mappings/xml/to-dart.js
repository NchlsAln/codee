"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xmlToDartRules = void 0;
exports.xmlToDart = xmlToDart;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("xml", "dart");
function xmlToDart(code) {
    return (0, mapping_helpers_1.translateWithFallback)("xml", "dart", code);
}
exports.xmlToDartRules = rules;
