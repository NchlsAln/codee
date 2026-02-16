"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.matlabAstPatterns = void 0;
exports.matlabAstPatterns = [
    { pattern: "^\\s*function\\b", description: "Function definition" },
    { pattern: "\\bclassdef\\b", description: "Class definition" },
    { pattern: "\\bend\\b", description: "Block end" },
    { pattern: "\\bplot\\b|\\bimshow\\b", description: "Visualization" },
    { pattern: "\\bfor\\b|\\bparfor\\b", description: "Loop" },
    { pattern: "\\bimport\\b", description: "Import" },
    { pattern: "\\beval\\b", description: "Dynamic evaluation (avoid when possible)" },
    { pattern: "\\bhandle\\b", description: "Handle class usage" },
    { pattern: "\\bzeros\\b|\\bones\\b", description: "Preallocation" },
    { pattern: "\\btable\\b|\\btimetable\\b", description: "Tabular data" },
    { pattern: "\\bparfor\\b|\\bspmd\\b", description: "Parallel constructs" }
];
