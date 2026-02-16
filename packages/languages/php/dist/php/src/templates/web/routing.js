"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routingTemplate = routingTemplate;
function routingTemplate() {
    return [
        "<?php",
        "$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';",
        "$path = parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH);",
        "if ($method === 'GET' && $path === '/health') {",
        "  header('Content-Type: application/json');",
        "  echo json_encode(['ok' => true]);",
        "  return;",
        "}",
        "http_response_code(404);"
    ].join("\n");
}
