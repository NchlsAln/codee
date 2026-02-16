export function reportingTemplate(): string {
  return [
    "CREATE VIEW monthly_revenue AS",
    "SELECT date_trunc('month', created_at) AS month,",
    "       SUM(amount) AS revenue",
    "FROM payments",
    "GROUP BY 1;"
  ].join("\n");
}
