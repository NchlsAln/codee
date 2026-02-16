export function hashingTemplate(): string {
  return [
    "<?php",
    "$hash = hash('sha256', 'secret');",
    "$password = password_hash('secret', PASSWORD_DEFAULT);",
    "var_dump($hash, $password);"
  ].join("\n");
}
