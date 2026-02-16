export function plotsTemplate(): string {
  return [
    "using Plots",
    "x = 1:5",
    "y = [2, 3, 5, 7, 11]",
    "plot(x, y, label=\"trend\")"
  ].join("\n");
}
