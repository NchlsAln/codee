"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.awkIdioms = void 0;
exports.awkIdioms = [
    { name: "Pattern-action", description: "Use /pattern/ { action } blocks for filtering." },
    { name: "BEGIN/END", description: "Initialize and finalize with BEGIN and END blocks." },
    { name: "Field variables", description: "Use $1, $2, ... with FS/OFS for columns." },
    { name: "Associative arrays", description: "Use array[key] for grouping and counting." },
    { name: "NR/FNR", description: "Use NR for global line count and FNR per file." },
    { name: "printf", description: "Use printf for aligned output and formatting." },
    { name: "One-liners", description: "Keep one-liners readable; switch to -f for scripts." },
    { name: "Portability", description: "Stick to POSIX awk when targeting diverse systems." }
];
