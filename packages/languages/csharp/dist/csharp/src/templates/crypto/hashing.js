"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashingTemplate = hashingTemplate;
function hashingTemplate() {
    return [
        "using System.Security.Cryptography;",
        "using System.Text;",
        "",
        "var bytes = SHA256.HashData(Encoding.UTF8.GetBytes(\"secret\"));",
        "Console.WriteLine(Convert.ToHexString(bytes));"
    ].join("\n");
}
