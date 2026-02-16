export function dataManipulationTemplate(): string {
  return [
    "library(dplyr)",
    "result <- df %>%",
    "  filter(score > 80) %>%",
    "  group_by(group) %>%",
    "  summarise(avg = mean(score), .groups = 'drop')",
    "print(result)"
  ].join("\n");
}
