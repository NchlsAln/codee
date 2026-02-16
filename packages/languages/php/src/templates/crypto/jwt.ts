export function jwtTemplate(): string {
  return [
    "<?php",
    "use Firebase\\JWT\\JWT;",
    "",
    "$payload = ['sub' => 123, 'exp' => time() + 3600];",
    "$token = JWT::encode($payload, 'secret', 'HS256');",
    "echo $token;"
  ].join("\n");
}
