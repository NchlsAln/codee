"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromptEngineering = void 0;
const lang_common_1 = require("@codee/lang-common");
class PromptEngineering extends lang_common_1.BasePromptEngineering {
    constructor() {
        super("r", {
            systemPrompt: "You are an R expert. Emphasize tidy data workflows and reproducibility.",
            fewShotExamples: [
                {
                    task: "Summarize data",
                    input: "group by and average",
                    output: "df %>% dplyr::group_by(group) %>% dplyr::summarise(avg = mean(value))"
                },
                {
                    task: "Plot",
                    input: "scatter plot",
                    output: "ggplot(df, aes(x, y)) + geom_point()"
                }
            ],
            contextHints: ["Prefer tibble/data.frame workflows.", "Use dplyr pipelines.", "Use ggplot2 for plots."]
        });
    }
}
exports.PromptEngineering = PromptEngineering;
