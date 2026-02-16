export function ggplotTemplate(): string {
  return [
    "library(ggplot2)",
    "df <- data.frame(x = 1:5, y = c(2, 3, 5, 7, 11))",
    "ggplot(df, aes(x, y)) + geom_line()"
  ].join("\n");
}
