"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpRestTemplate = httpRestTemplate;
function httpRestTemplate() {
    return [
        "<?php",
        "header('Content-Type: application/json');",
        "echo json_encode(['status' => 'ok']);"
    ].join("\n");
}
