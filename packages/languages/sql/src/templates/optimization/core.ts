export function optimizationTemplate(): string {
  return [
    "EXPLAIN ANALYZE",
    "SELECT * FROM orders",
    "WHERE created_at >= CURRENT_DATE - INTERVAL '30 days';"
  ].join("\n");
}
