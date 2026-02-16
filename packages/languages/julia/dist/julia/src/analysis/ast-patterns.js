"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.juliaAstPatterns = void 0;
exports.juliaAstPatterns = [
    { pattern: "\\bfunction\\s+\\w+", description: "Function definition" },
    { pattern: "\\bstruct\\s+\\w+", description: "Struct definition" },
    { pattern: "::", description: "Type annotation" },
    { pattern: "\\bmacro\\s+\\w+", description: "Macro definition" },
    { pattern: "\\b@\\w+", description: "Macro invocation" },
    { pattern: "\\busing\\b|\\bimport\\b", description: "Module import" }
];
