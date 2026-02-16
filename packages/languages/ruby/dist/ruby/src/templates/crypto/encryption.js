"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encryptionTemplate = encryptionTemplate;
function encryptionTemplate() {
    return [
        "require 'openssl'",
        "cipher = OpenSSL::Cipher.new('aes-256-gcm')",
        "cipher.encrypt",
        "cipher.key = 'key' * 8",
        "iv = cipher.random_iv",
        "encrypted = cipher.update('secret') + cipher.final",
        "puts encrypted.bytesize"
    ].join("\n");
}
