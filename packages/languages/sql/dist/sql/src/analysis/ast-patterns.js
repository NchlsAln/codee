"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sqlAstPatterns = void 0;
exports.sqlAstPatterns = [
    { pattern: "\\bSELECT\\b", description: "Select query" },
    { pattern: "\\bFROM\\b", description: "From clause" },
    { pattern: "\\bJOIN\\b", description: "Join clause" },
    { pattern: "\\bWHERE\\b", description: "Where clause" },
    { pattern: "\\bGROUP BY\\b", description: "Grouping" },
    { pattern: "\\bOVER\\b", description: "Window function" }
];
