"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encryptionTemplate = encryptionTemplate;
function encryptionTemplate() {
    return [
        "from cryptography.fernet import Fernet",
        "",
        "key = Fernet.generate_key()",
        "cipher = Fernet(key)",
        "",
        "token = cipher.encrypt(b'secret')",
        "print(cipher.decrypt(token))"
    ].join("\n");
}
