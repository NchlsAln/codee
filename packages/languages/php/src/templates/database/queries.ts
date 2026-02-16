export function queriesTemplate(): string {
  return [
    "<?php",
    "$stmt = $pdo->prepare('SELECT id, email FROM users WHERE email = :email');",
    "$stmt->execute(['email' => $email]);",
    "$user = $stmt->fetch(PDO::FETCH_ASSOC);",
    "var_dump($user);"
  ].join("\n");
}
