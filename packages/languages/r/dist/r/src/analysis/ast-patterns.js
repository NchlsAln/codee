"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rAstPatterns = void 0;
exports.rAstPatterns = [
    { pattern: "\\bfunction\\s*\\(", description: "Function definition" },
    { pattern: "<-|=", description: "Assignment" },
    { pattern: "\\bdata\\.frame\\b|\\btibble\\b", description: "Data frame usage" },
    { pattern: "\\bggplot\\b", description: "ggplot2 usage" },
    { pattern: "\\blibrary\\s*\\(", description: "Package import" },
    { pattern: "\\bshiny\\b", description: "Shiny usage" },
    { pattern: "\\bapply\\b|\\blapply\\b|\\bsapply\\b", description: "Apply family usage" },
    { pattern: "\\bfor\\b|\\bwhile\\b", description: "Explicit loops (vectorize if possible)" },
    { pattern: "%>%|\\|>", description: "Pipe usage" },
    { pattern: "\\bmutate\\b|\\bsummarise\\b|\\bgroup_by\\b", description: "dplyr transformations" },
    { pattern: "\\bdata\\.table\\b", description: "data.table usage" },
    { pattern: "\\bsetwd\\b", description: "Working directory mutation" }
];
