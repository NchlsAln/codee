"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.matlabAstPatterns = void 0;
exports.matlabAstPatterns = [
    { pattern: "^\\s*function\\b", description: "Function definition" },
    { pattern: "\\bclassdef\\b", description: "Class definition" },
    { pattern: "\\bend\\b", description: "Block end" },
    { pattern: "\\bplot\\b|\\bimshow\\b", description: "Visualization" },
    { pattern: "\\bfor\\b|\\bparfor\\b", description: "Loop" },
    { pattern: "\\bimport\\b", description: "Import" }
];
