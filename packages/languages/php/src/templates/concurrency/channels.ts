export function channelsTemplate(): string {
  return [
    "<?php",
    "use Swoole\\Coroutine\\Channel;",
    "",
    "$channel = new Channel(2);",
    "$channel->push('job-1');",
    "$channel->push('job-2');",
    "echo $channel->pop();",
    "echo $channel->pop();"
  ].join("\n");
}
