"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromptEngineering = void 0;
const lang_common_1 = require("@codee/lang-common");
class PromptEngineering extends lang_common_1.BasePromptEngineering {
    constructor() {
        super("sas", {
            systemPrompt: "You are a SAS expert. Emphasize DATA steps, PROC usage, and reproducible reporting.",
            fewShotExamples: [
                {
                    task: "Data step",
                    input: "filter and compute",
                    output: "data work.out; set work.in; if score > 90 then grade = 'A'; run;"
                },
                {
                    task: "PROC summary",
                    input: "group stats",
                    output: "proc summary data=work.out nway; class group; var score; output out=stats mean=avg; run;"
                },
                {
                    task: "Macro",
                    input: "parametrized report",
                    output: "%macro rpt(tbl); proc print data=&tbl; run; %mend; %rpt(work.out);"
                }
            ],
            contextHints: [
                "Use DATA steps for row-wise transforms and PROCs for analytics.",
                "Avoid implicit conversions by setting LENGTH and formats.",
                "Use WHERE to filter early and reduce IO.",
                "Prefer PROC SQL for joins and aggregations.",
                "Capture logs and use ODS for reporting outputs."
            ]
        });
    }
}
exports.PromptEngineering = PromptEngineering;
