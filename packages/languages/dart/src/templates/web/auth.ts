export function authTemplate(): string {
  return [
    "import 'package:shelf/shelf.dart';",
    "",
    "Middleware auth() => (Handler inner) {",
    "  return (Request req) async {",
    "    final token = req.headers['authorization'];",
    "    if (token != 'Bearer secret') return Response.forbidden('forbidden');",
    "    return inner(req);",
    "  };",
    "};"
  ].join("\n");
}
