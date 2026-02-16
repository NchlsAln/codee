"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromptEngineering = void 0;
const lang_common_1 = require("@codee/lang-common");
class PromptEngineering extends lang_common_1.BasePromptEngineering {
    constructor() {
        super("r", {
            systemPrompt: "You are an R expert. Emphasize tidy data workflows, statistical rigor, and reproducibility.",
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
                },
                {
                    task: "Model",
                    input: "linear regression",
                    output: "fit <- lm(y ~ x + z, data = df); summary(fit)"
                },
                {
                    task: "Time series",
                    input: "arima forecast",
                    output: "model <- forecast::auto.arima(ts_data); forecast::forecast(model, h = 12)"
                }
            ],
            contextHints: [
                "Prefer tibble/data.frame workflows and explicit column names.",
                "Use dplyr pipelines for transformations.",
                "Use ggplot2 with clear scales and labels.",
                "Report sessionInfo() for reproducibility.",
                "Use set.seed() for stochastic workflows."
            ]
        });
    }
}
exports.PromptEngineering = PromptEngineering;
