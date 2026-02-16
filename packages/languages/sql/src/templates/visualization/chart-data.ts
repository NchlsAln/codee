export function chartDataTemplate(): string {
  return [
    "SELECT",
    "  DATE_TRUNC('month', order_date) AS month,",
    "  SUM(total_amount) AS revenue",
    "FROM orders",
    "GROUP BY DATE_TRUNC('month', order_date)",
    "ORDER BY month;"
  ].join("\n");
}
