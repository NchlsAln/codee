export function financeTemplate(): string {
  return [
    "SELECT trade_date,",
    "       (price - LAG(price) OVER (ORDER BY trade_date)) / LAG(price) OVER (ORDER BY trade_date) AS return",
    "FROM prices;"
  ].join("\n");
}
