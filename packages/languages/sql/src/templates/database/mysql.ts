export function mysqlTemplate(): string {
  return [
    "CREATE TABLE IF NOT EXISTS customers (",
    "  customer_id BIGINT AUTO_INCREMENT PRIMARY KEY,",
    "  email VARCHAR(255) NOT NULL UNIQUE,",
    "  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP",
    ") ENGINE=InnoDB;"
  ].join("\n");
}
