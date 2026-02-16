"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncTemplate = asyncTemplate;
function asyncTemplate() {
    return [
        "<?php",
        "use React\\EventLoop\\Loop;",
        "use React\\Promise\\Promise;",
        "",
        "$promise = new Promise(function ($resolve) {",
        "  Loop::addTimer(0.1, fn() => $resolve('done'));",
        "});",
        "$promise->then(fn($value) => print($value));",
        "Loop::run();"
    ].join("\n");
}
