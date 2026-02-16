"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.protobufTemplate = protobufTemplate;
function protobufTemplate() {
    return [
        "import SwiftProtobuf",
        "",
        "var user = My_User()",
        "user.id = 1",
        "user.name = \"Ada\"",
        "let bytes = try user.serializedData()",
        "print(bytes.count)"
    ].join("\n");
}
