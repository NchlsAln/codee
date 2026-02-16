"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encryptionTemplate = encryptionTemplate;
function encryptionTemplate() {
    return [
        "using System.Security.Cryptography;",
        "using System.Text;",
        "",
        "using var aes = Aes.Create();",
        "aes.Key = Encoding.UTF8.GetBytes(\"1234567812345678\");",
        "aes.IV = Encoding.UTF8.GetBytes(\"1234567812345678\");",
        "using var encryptor = aes.CreateEncryptor();",
        "var cipher = encryptor.TransformFinalBlock(Encoding.UTF8.GetBytes(\"payload\"), 0, 7);",
        "Console.WriteLine(cipher.Length);"
    ].join("\n");
}
