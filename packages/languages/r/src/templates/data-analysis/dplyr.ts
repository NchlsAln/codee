export function dplyrTemplate(): string {
  return [
    "library(dplyr)",
    "df <- tibble(id = 1:5, value = c(2, 4, 6, 8, 10))",
    "summary <- df %>% group_by(id) %>% summarise(avg = mean(value))",
    "print(summary)"
  ].join("\n");
}
