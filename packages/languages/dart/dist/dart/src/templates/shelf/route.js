"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shelfRouteTemplate = shelfRouteTemplate;
function shelfRouteTemplate() {
    return [
        "import 'package:shelf/shelf.dart';",
        "",
        "Response handler(Request request) {",
        "  return Response.ok('ok');",
        "}"
    ].join("\n");
}
