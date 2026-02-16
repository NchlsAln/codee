"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rAstPatterns = void 0;
exports.rAstPatterns = [
    { pattern: "\\bfunction\\s*\\(", description: "Function definition" },
    { pattern: "<-|=", description: "Assignment" },
    { pattern: "\\bdata\\.frame\\b|\\btibble\\b", description: "Data frame usage" },
    { pattern: "\\bggplot\\b", description: "ggplot2 usage" },
    { pattern: "\\blibrary\\s*\\(", description: "Package import" },
    { pattern: "\\bshiny\\b", description: "Shiny usage" }
];
