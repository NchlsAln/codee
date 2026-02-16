"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encryptionTemplate = encryptionTemplate;
function encryptionTemplate() {
    return [
        "import CryptoKit",
        "",
        "let key = SymmetricKey(size: .bits256)",
        "let sealed = try AES.GCM.seal(Data(\"payload\".utf8), using: key)",
        "print(sealed.ciphertext.count)"
    ].join("\n");
}
