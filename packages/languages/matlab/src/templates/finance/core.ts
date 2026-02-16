export function financeTemplate(): string {
  return [
    "rets = price2ret(prices);",
    "vol = std(rets);",
    "disp(vol)"
  ].join("\n");
}
