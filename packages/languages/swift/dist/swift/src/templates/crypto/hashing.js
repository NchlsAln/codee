"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashingTemplate = hashingTemplate;
function hashingTemplate() {
    return [
        "import CryptoKit",
        "",
        "let digest = SHA256.hash(data: Data(\"secret\".utf8))",
        "print(digest.compactMap { String(format: \"%02x\", $0) }.joined())"
    ].join("\n");
}
