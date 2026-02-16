"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.erlangAstPatterns = void 0;
exports.erlangAstPatterns = [
    { pattern: "-module\\(", description: "Module declaration" },
    { pattern: "-export\\(", description: "Export declaration" },
    { pattern: "\\breceive\\b", description: "Receive block" },
    { pattern: "->", description: "Clause arrow" },
    { pattern: "\\bfun\\b", description: "Anonymous function" },
    { pattern: "#\\w+", description: "Record usage" }
];
