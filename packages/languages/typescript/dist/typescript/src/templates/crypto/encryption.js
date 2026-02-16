"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encryptionTemplate = encryptionTemplate;
function encryptionTemplate() {
    return [
        "import { createCipheriv, randomBytes } from 'node:crypto';",
        "",
        "const key = randomBytes(32);",
        "const iv = randomBytes(12);",
        "const cipher = createCipheriv('aes-256-gcm', key, iv);",
        "const encrypted = Buffer.concat([cipher.update('secret', 'utf8'), cipher.final()]);",
        "",
        "console.log(encrypted.toString('hex'));"
    ].join("\n");
}
