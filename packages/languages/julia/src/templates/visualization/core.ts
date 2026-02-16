export function visualizationTemplate(): string {
  return [
    "using Plots",
    "plot(x, y, seriestype=:scatter)",
    "plot!(x, yhat)"
  ].join("\n");
}
