"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testingTemplate = testingTemplate;
function testingTemplate() {
    return [
        "import std/[unittest, random, times]",
        "test \"add\":",
        "  check 1 + 2 == 3",
        "randomize()",
        "for i in 0..100:",
        "  let v = rand(100)",
        "  doAssert v >= 0",
        "let start = cpuTime()",
        "discard start"
    ].join("\n");
}
