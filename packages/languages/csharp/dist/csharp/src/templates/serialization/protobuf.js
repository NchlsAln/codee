"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.protobufTemplate = protobufTemplate;
function protobufTemplate() {
    return [
        "using Google.Protobuf;",
        "using MyProto;",
        "",
        "var msg = new User { Id = 1, Name = \"Ada\" };",
        "var bytes = msg.ToByteArray();",
        "Console.WriteLine(bytes.Length);"
    ].join("\n");
}
