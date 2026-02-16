export function httpRestTemplate(): string {
  return [
    "<?php",
    "header('Content-Type: application/json');",
    "echo json_encode(['status' => 'ok']);"
  ].join("\n");
}
