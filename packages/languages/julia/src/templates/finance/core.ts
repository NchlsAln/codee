export function financeTemplate(): string {
  return [
    "using MarketData, Statistics",
    "prices = marketdata()[!, :AdjClose]",
    "rets = diff(log.(prices))",
    "println(mean(rets))"
  ].join("\n");
}
