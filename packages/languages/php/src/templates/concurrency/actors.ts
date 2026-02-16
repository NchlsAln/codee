export function actorsTemplate(): string {
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
