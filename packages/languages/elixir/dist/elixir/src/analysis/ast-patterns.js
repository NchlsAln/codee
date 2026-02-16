"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.elixirAstPatterns = void 0;
exports.elixirAstPatterns = [
    { pattern: "\\bdefmodule\\b", description: "Module definition" },
    { pattern: "\\bdef\\b", description: "Function definition" },
    { pattern: "\\|>", description: "Pipeline operator" },
    { pattern: "%\\{", description: "Map literal" },
    { pattern: "\\bcase\\b", description: "Case expression" },
    { pattern: "\\breceive\\b", description: "Receive block" }
];
