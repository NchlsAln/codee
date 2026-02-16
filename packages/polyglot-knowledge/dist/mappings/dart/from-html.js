"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.htmlToDartRules = void 0;
exports.htmlToDart = htmlToDart;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("html", "dart");
function htmlToDart(code) {
    return (0, mapping_helpers_1.translateWithFallback)("html", "dart", code);
}
exports.htmlToDartRules = rules;
