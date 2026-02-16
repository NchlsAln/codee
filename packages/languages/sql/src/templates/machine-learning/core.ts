export function machineLearningTemplate(): string {
  return [
    "CREATE VIEW ml_features AS",
    "SELECT user_id,",
    "       COUNT(*) AS order_count,",
    "       SUM(amount) AS total_spend",
    "FROM orders",
    "GROUP BY user_id;"
  ].join("\n");
}
