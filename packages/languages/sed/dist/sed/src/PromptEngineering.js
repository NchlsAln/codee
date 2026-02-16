"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromptEngineering = void 0;
const lang_common_1 = require("@codee/lang-common");
class PromptEngineering extends lang_common_1.BasePromptEngineering {
    constructor() {
        super("sed", {
            systemPrompt: "You are a sed expert. Favor readable, portable scripts and document GNU/BSD differences.",
            fewShotExamples: [
                {
                    task: "Replace tokens",
                    input: "replace foo with bar",
                    output: "sed 's/foo/bar/g' input.txt"
                },
                {
                    task: "Delete lines",
                    input: "remove blank lines",
                    output: "sed '/^$/d' input.txt"
                },
                {
                    task: "Range edit",
                    input: "print lines 10-20",
                    output: "sed -n '10,20p' input.txt"
                }
            ],
            contextHints: [
                "Use -n with explicit p for predictable output.",
                "Explain -i differences between GNU and BSD sed.",
                "Prefer scripts (-f) when commands exceed a one-liner.",
                "Keep regexes simple and escape delimiters carefully.",
                "Avoid hold space unless necessary; document why."
            ]
        });
    }
}
exports.PromptEngineering = PromptEngineering;
