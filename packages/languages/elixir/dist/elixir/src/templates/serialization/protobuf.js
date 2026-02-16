"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.protobufTemplate = protobufTemplate;
function protobufTemplate() {
    return [
        "user = %Example.User{id: 1, name: \"Ada\"}",
        "bytes = Example.User.encode(user)",
        "IO.inspect(byte_size(bytes))"
    ].join("\n");
}
