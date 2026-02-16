"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encryptionTemplate = encryptionTemplate;
function encryptionTemplate() {
    return [
        "<?php",
        "$cipher = 'aes-256-gcm';",
        "$iv = random_bytes(openssl_cipher_iv_length($cipher));",
        "$tag = '';",
        "$ciphertext = openssl_encrypt('secret', $cipher, 'key', 0, $iv, $tag);",
        "$plain = openssl_decrypt($ciphertext, $cipher, 'key', 0, $iv, $tag);",
        "var_dump($plain);"
    ].join("\n");
}
