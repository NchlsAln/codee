export function middlewareTemplate(): string {
  return [
    "import 'package:shelf/shelf.dart';",
    "",
    "Middleware requestId() => (Handler inner) {",
    "  return (Request req) async {",
    "    final updated = req.change(headers: {",
    "      'x-request-id': DateTime.now().millisecondsSinceEpoch.toString(),",
    "    });",
    "    return inner(updated);",
    "  };",
    "};"
  ].join("\n");
}
