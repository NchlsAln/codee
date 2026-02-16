"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpServerTemplate = httpServerTemplate;
function httpServerTemplate() {
    return [
        "<?php",
        "$server = stream_socket_server('tcp://127.0.0.1:8080');",
        "while ($conn = @stream_socket_accept($server)) {",
        "  fwrite($conn, \"HTTP/1.1 200 OK\\r\\nContent-Type: text/plain\\r\\n\\r\\nOK\");",
        "  fclose($conn);",
        "}"
    ].join("\n");
}
