"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.websocketsTemplate = websocketsTemplate;
function websocketsTemplate() {
    return [
        "<?php",
        "use Ratchet\\MessageComponentInterface;",
        "use Ratchet\\ConnectionInterface;",
        "",
        "final class ChatServer implements MessageComponentInterface",
        "{",
        "  public function onOpen(ConnectionInterface $conn): void {}",
        "  public function onClose(ConnectionInterface $conn): void {}",
        "  public function onError(ConnectionInterface $conn, \\Exception $e): void {}",
        "  public function onMessage(ConnectionInterface $from, $msg): void",
        "  {",
        "    $from->send($msg);",
        "  }",
        "}",
        ""
    ].join("\n");
}
