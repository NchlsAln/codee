export function financeTemplate(): string {
  return [
    "library(quantmod)",
    "getSymbols('AAPL')",
    "returns <- dailyReturn(Cl(AAPL))",
    "plot(returns)"
  ].join("\n");
}
