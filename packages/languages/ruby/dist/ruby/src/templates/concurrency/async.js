"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncTemplate = asyncTemplate;
function asyncTemplate() {
    return [
        "require 'async'",
        "Async do",
        "  task = Async do",
        "    42",
        "  end",
        "  puts task.wait",
        "end"
    ].join("\n");
}
