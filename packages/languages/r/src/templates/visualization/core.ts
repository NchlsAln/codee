export function visualizationTemplate(): string {
  return [
    "library(ggplot2)",
    "ggplot(df, aes(x = x, y = y)) +",
    "  geom_point() +",
    "  geom_smooth(method = 'lm')"
  ].join("\n");
}
