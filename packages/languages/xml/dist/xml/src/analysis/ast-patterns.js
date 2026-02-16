"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xmlAstPatterns = void 0;
exports.xmlAstPatterns = [
    { pattern: "<\\?xml", description: "XML declaration" },
    { pattern: "xmlns:", description: "Namespace declaration" },
    { pattern: "xsi:schemaLocation", description: "Schema location" },
    { pattern: "<!DOCTYPE", description: "DOCTYPE (consider security)" },
    { pattern: "<[^/!][^>]*>", description: "Element start" },
    { pattern: "</[^>]+>", description: "Element end" },
    { pattern: "&\\w+;", description: "Entity usage" }
];
