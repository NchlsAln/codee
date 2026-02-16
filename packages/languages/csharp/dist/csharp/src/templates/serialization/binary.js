"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.binaryTemplate = binaryTemplate;
function binaryTemplate() {
    return [
        "using MessagePack;",
        "",
        "var data = MessagePackSerializer.Serialize(new[] { 1, 2, 3 });",
        "var items = MessagePackSerializer.Deserialize<int[]>(data);",
        "Console.WriteLine(items.Length);"
    ].join("\n");
}
