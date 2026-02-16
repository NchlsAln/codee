"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.channelsTemplate = channelsTemplate;
function channelsTemplate() {
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
