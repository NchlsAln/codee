export function trainingTemplate(): string {
  return [
    "SELECT",
    "  u.user_id,",
    "  u.age,",
    "  u.country,",
    "  COALESCE(SUM(o.total_amount), 0) AS lifetime_value,",
    "  CASE WHEN COUNT(o.order_id) > 0 THEN 1 ELSE 0 END AS has_purchased",
    "FROM users u",
    "LEFT JOIN orders o ON o.user_id = u.user_id",
    "GROUP BY u.user_id, u.age, u.country;"
  ].join("\n");
}
