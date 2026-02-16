"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.protobufTemplate = protobufTemplate;
function protobufTemplate() {
    return [
        "val user = User.newBuilder().setId(1).setEmail(\"ada@example.com\").build()",
        "val bytes = user.toByteArray()",
        "println(bytes.size)"
    ].join("\n");
}
