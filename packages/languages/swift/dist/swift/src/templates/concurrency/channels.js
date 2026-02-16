"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.channelsTemplate = channelsTemplate;
function channelsTemplate() {
    return [
        "let stream = AsyncStream<String> { continuation in",
        "  continuation.yield(\"work\")",
        "  continuation.finish()",
        "}",
        "",
        "for await value in stream {",
        "  print(value)",
        "}"
    ].join("\n");
}
