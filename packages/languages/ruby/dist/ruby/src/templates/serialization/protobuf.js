"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.protobufTemplate = protobufTemplate;
function protobufTemplate() {
    return [
        "require 'google/protobuf'",
        "user = Example::User.new(id: 1, name: 'Ada')",
        "bytes = Example::User.encode(user)",
        "puts bytes.bytesize"
    ].join("\n");
}
