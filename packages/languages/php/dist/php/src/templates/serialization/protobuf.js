"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.protobufTemplate = protobufTemplate;
function protobufTemplate() {
    return [
        "<?php",
        "$message = new \\Example\\User();",
        "$message->setId(1);",
        "$message->setName('Ada');",
        "$bytes = $message->serializeToString();",
        "echo strlen($bytes);"
    ].join("\n");
}
