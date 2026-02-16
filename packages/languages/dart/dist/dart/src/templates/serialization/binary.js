"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.binaryTemplate = binaryTemplate;
function binaryTemplate() {
    return [
        "import 'package:msgpack_dart/msgpack_dart.dart';",
        "",
        "final bytes = serialize([1, 2, 3]);",
        "final data = deserialize(bytes);",
        "print(data);"
    ].join("\n");
}
