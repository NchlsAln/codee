"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromptEngineering = void 0;
const lang_common_1 = require("@codee/lang-common");
class PromptEngineering extends lang_common_1.BasePromptEngineering {
    constructor() {
        super("bash", {
            systemPrompt: "You are a Bash expert. Prefer POSIX-safe constructs when possible, prioritize safety, and explain portability tradeoffs.",
            fewShotExamples: [
                {
                    task: "Safe file cleanup",
                    input: "delete temp files older than 7 days",
                    output: "find /tmp -type f -mtime +7 -print0 | xargs -0 rm -f"
                },
                {
                    task: "Parse log",
                    input: "count 500 errors",
                    output: "grep -c ' 500 ' access.log"
                },
                {
                    task: "One-liner vs script",
                    input: "loop over files and compress",
                    output: "for f in *.log; do gzip -9 \"$f\"; done"
                }
            ],
            contextHints: [
                "Use set -euo pipefail for robust scripts and handle cleanup with trap.",
                "Prefer printf over echo for portable formatting.",
                "Quote variables and use arrays to avoid word splitting issues.",
                "Use POSIX flags where possible; call out GNU/BSD differences explicitly.",
                "Fail fast and return explicit exit codes."
            ]
        });
    }
}
exports.PromptEngineering = PromptEngineering;
