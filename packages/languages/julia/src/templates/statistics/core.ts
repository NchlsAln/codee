export function statisticsTemplate(): string {
  return [
    "using Statistics, HypothesisTests",
    "mean(x)",
    "t = OneSampleTTest(x, 0.0)",
    "pvalue(t)"
  ].join("\n");
}
