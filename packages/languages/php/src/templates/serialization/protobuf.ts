export function protobufTemplate(): string {
  return [
    "<?php",
    "$message = new \\Example\\User();",
    "$message->setId(1);",
    "$message->setName('Ada');",
    "$bytes = $message->serializeToString();",
    "echo strlen($bytes);"
  ].join("\n");
}
