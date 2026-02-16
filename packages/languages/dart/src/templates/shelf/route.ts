export function shelfRouteTemplate(): string {
  return [
    "import 'package:shelf/shelf.dart';",
    "",
    "Response handler(Request request) {",
    "  return Response.ok('ok');",
    "}"
  ].join("\n");
}
