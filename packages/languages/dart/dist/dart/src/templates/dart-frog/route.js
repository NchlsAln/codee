"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dartFrogTemplate = dartFrogTemplate;
function dartFrogTemplate() {
    return [
        "import 'package:dart_frog/dart_frog.dart';",
        "",
        "Response onRequest(RequestContext context) {",
        "  return Response(body: 'hello');",
        "}"
    ].join("\n");
}
