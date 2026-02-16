"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sqlAstPatterns = void 0;
exports.sqlAstPatterns = [
    { pattern: "\\bSELECT\\b", description: "Select query" },
    { pattern: "\\bFROM\\b", description: "From clause" },
    { pattern: "\\bJOIN\\b", description: "Join clause" },
    { pattern: "\\bWHERE\\b", description: "Where clause" },
    { pattern: "\\bGROUP BY\\b", description: "Grouping" },
    { pattern: "\\bOVER\\b", description: "Window function" },
    { pattern: "\\bWITH\\b", description: "CTE usage" },
    { pattern: "\\bSELECT\\s+\\*", description: "Select all (avoid in production)" },
    { pattern: "\\bLIKE\\s+'%", description: "Leading wildcard (index bypass)" },
    { pattern: "\\bUNION\\b", description: "Set operation" },
    { pattern: "\\bEXPLAIN\\b", description: "Query plan inspection" },
    { pattern: "\\bOR\\s+1=1\\b|\\b--\\b", description: "Possible injection pattern" }
];
