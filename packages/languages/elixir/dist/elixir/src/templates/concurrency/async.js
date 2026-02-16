"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncTemplate = asyncTemplate;
function asyncTemplate() {
    return [
        "task = Task.async(fn -> 42 end)",
        "IO.inspect(Task.await(task))"
    ].join("\n");
}
