"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parallelTemplate = parallelTemplate;
function parallelTemplate() {
    return [
        "import 'dart:isolate';",
        "",
        "final result = await Isolate.run(() => 1 + 1);",
        "print(result);"
    ].join("\n");
}
