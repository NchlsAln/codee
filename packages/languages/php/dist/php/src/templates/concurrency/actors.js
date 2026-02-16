"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actorsTemplate = actorsTemplate;
function actorsTemplate() {
    return [
        "<?php",
        "use Swoole\\Coroutine\\Channel;",
        "",
        "$mailbox = new Channel(1);",
        "go(function () use ($mailbox) {",
        "  $message = $mailbox->pop();",
        "  echo $message;",
        "});",
        "$mailbox->push('ping');"
    ].join("\n");
}
