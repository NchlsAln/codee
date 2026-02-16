"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromptEngineering = void 0;
const lang_common_1 = require("@codee/lang-common");
class PromptEngineering extends lang_common_1.BasePromptEngineering {
    constructor() {
        super("awk", {
            systemPrompt: "You are an AWK expert. Optimize for streaming text processing, portability, and clarity in one-liners.",
            fewShotExamples: [
                {
                    task: "Sum column",
                    input: "sum the 3rd column",
                    output: "awk '{ sum += $3 } END { print sum }' data.csv"
                },
                {
                    task: "CSV filter",
                    input: "rows where status is ERROR",
                    output: "awk -F, '$5 == \"ERROR\"' logs.csv"
                },
                {
                    task: "Group counts",
                    input: "count by first field",
                    output: "awk '{ counts[$1]++ } END { for (k in counts) print k, counts[k] }' input.txt"
                }
            ],
            contextHints: [
                "Set FS/OFS explicitly when parsing structured text.",
                "Use BEGIN/END blocks for setup and summaries.",
                "Prefer one-pass scans; avoid expensive per-line commands.",
                "Call out gawk-only features when used.",
                "Switch to -f scripts when logic grows beyond a one-liner."
            ]
        });
    }
}
exports.PromptEngineering = PromptEngineering;
