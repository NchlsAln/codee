"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encryptionTemplate = encryptionTemplate;
function encryptionTemplate() {
    return [
        "import 'dart:typed_data';",
        "import 'package:pointycastle/export.dart';",
        "",
        "final key = Uint8List.fromList(List.filled(16, 1));",
        "final cipher = PaddedBlockCipherImpl(PKCS7Padding(), CBCBlockCipher(AESEngine()));",
        "cipher.init(true, PaddedBlockCipherParameters(KeyParameter(key), null));",
        "final out = cipher.process(Uint8List.fromList('payload'.codeUnits));",
        "print(out.length);"
    ].join("\n");
}
