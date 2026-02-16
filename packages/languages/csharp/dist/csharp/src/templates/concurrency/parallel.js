"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parallelTemplate = parallelTemplate;
function parallelTemplate() {
    return [
        "var tasks = Enumerable.Range(1, 3).Select(async n => n * 2);",
        "var results = await Task.WhenAll(tasks);",
        "Console.WriteLine(string.Join(\",\", results));"
    ].join("\n");
}
