"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.elixirAstPatterns = void 0;
exports.elixirAstPatterns = [
    { pattern: "\\bdefmodule\\b", description: "Module definition" },
    { pattern: "\\bdef\\b", description: "Function definition" },
    { pattern: "\\|>", description: "Pipeline operator" },
    { pattern: "%\\{", description: "Map literal" },
    { pattern: "\\bcase\\b", description: "Case expression" },
    { pattern: "\\breceive\\b", description: "Receive block" },
    { pattern: "\\bGenServer\\b", description: "GenServer usage" },
    { pattern: "\\bTask\\b", description: "Async Task usage" },
    { pattern: "\\bwith\\b", description: "With expression" },
    { pattern: "\\btry\\b", description: "Try expression" },
    { pattern: "\\bEcto\\b", description: "Ecto usage" },
    { pattern: "\\bPhoenix\\b", description: "Phoenix usage" },
    { pattern: "\\bSystem\\.cmd\\b", description: "Shell execution (review inputs)" }
];
