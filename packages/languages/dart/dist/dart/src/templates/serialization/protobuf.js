"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.protobufTemplate = protobufTemplate;
function protobufTemplate() {
    return [
        "import 'package:protobuf/protobuf.dart';",
        "",
        "final msg = User()..id = 1..name = 'Ada';",
        "final bytes = msg.writeToBuffer();",
        "print(bytes.length);"
    ].join("\n");
}
