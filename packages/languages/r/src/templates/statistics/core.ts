export function statisticsTemplate(): string {
  return [
    "fit <- lm(y ~ x + z, data = df)",
    "summary(fit)",
    "t.test(df$x, df$y)"
  ].join("\n");
}
