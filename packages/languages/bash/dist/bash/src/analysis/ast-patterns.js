"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bashAstPatterns = void 0;
exports.bashAstPatterns = [
    { pattern: "\\bset\\s+-e\\b", description: "set -e enabled" },
    { pattern: "\\bset\\s+-u\\b", description: "set -u enabled" },
    { pattern: "\\bset\\s+-o\\s+pipefail\\b", description: "pipefail enabled" },
    { pattern: "\\$\\{?\\w+\\}?", description: "Variable expansion (check quoting)" },
    { pattern: "\\b\\$\\(", description: "Command substitution" },
    { pattern: "`[^`]+`", description: "Legacy command substitution" },
    { pattern: "\\|\\s*\\w+", description: "Pipeline usage" },
    { pattern: "\\btrap\\b", description: "Signal handling" },
    { pattern: "<<-?\\s*\\w+", description: "Here-document" },
    { pattern: "\\bexport\\b", description: "Environment export" },
    { pattern: "\\bfor\\s+\\w+\\s+in\\b", description: "Word-splitting loop (check quoting)" }
];
