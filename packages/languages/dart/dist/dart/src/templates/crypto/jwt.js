"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtTemplate = jwtTemplate;
function jwtTemplate() {
    return [
        "import 'package:dart_jsonwebtoken/dart_jsonwebtoken.dart';",
        "",
        "final jwt = JWT({'sub': 'user-1'});",
        "final token = jwt.sign(SecretKey('secret'));",
        "print(token);"
    ].join("\n");
}
