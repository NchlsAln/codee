"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scssAstPatterns = void 0;
exports.scssAstPatterns = [
    { pattern: "\\$[\\w-]+\\s*:", description: "Variable assignment" },
    { pattern: "@mixin\\s+\\w+", description: "Mixin definition" },
    { pattern: "@include\\s+\\w+", description: "Mixin usage" },
    { pattern: "@extend", description: "Selector extension" },
    { pattern: "\\{[^{}]*\\{", description: "Nested rules" },
    { pattern: "@use|@forward", description: "Module system" },
    { pattern: "&[\\w-]*", description: "Parent selector usage" }
];
