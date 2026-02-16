import { BasePromptEngineering } from "@codee/lang-common";

export class PromptEngineering extends BasePromptEngineering {
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

