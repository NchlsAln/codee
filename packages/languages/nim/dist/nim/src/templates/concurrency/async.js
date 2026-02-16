"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncTemplate = asyncTemplate;
function asyncTemplate() {
    return [
        "import asyncdispatch",
        "proc fetch(): Future[string] {.async.} =",
        "  return \"ok\"",
        "",
        "echo waitFor(fetch())"
    ].join("\n");
}
