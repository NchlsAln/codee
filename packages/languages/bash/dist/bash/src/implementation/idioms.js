"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bashIdioms = void 0;
exports.bashIdioms = [
    { name: "Strict mode", description: "Use set -euo pipefail and a safe IFS." },
    { name: "Pipelines", description: "Compose commands with pipes; avoid UUOC and parse with tools." },
    { name: "Quoting", description: "Quote variables and paths to prevent word splitting and globbing." },
    { name: "Command substitution", description: "Prefer $(...) over backticks for nesting." },
    { name: "Arrays", description: "Use arrays for lists; avoid for x in $(cmd)." },
    { name: "Here-docs", description: "Use <<'EOF' for literal blocks and configs." },
    { name: "Functions", description: "Use local variables and explicit return codes." },
    { name: "Trap cleanup", description: "Trap EXIT/INT for cleanup and temp files." },
    { name: "Conditionals", description: "Prefer [[ ]] for safer tests and pattern matching." }
];
