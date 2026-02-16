"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashingTemplate = hashingTemplate;
function hashingTemplate() {
    return [
        "import java.security.MessageDigest",
        "",
        "val digest = MessageDigest.getInstance(\"SHA-256\")",
        "val hash = digest.digest(\"secret\".toByteArray())",
        "println(hash.size)"
    ].join("\n");
}
