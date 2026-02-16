export function connectionsTemplate(): string {
  return [
    "<?php",
    "$dsn = 'mysql:host=127.0.0.1;dbname=app;charset=utf8mb4';",
    "$pdo = new PDO($dsn, 'user', 'pass', [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);",
    "echo 'connected';"
  ].join("\n");
}
