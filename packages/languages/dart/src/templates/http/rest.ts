export function httpRestTemplate(): string {
  return [
    "import 'package:shelf/shelf.dart';",
    "import 'package:shelf_router/shelf_router.dart';",
    "",
    "final router = Router()",
    "  ..get('/api/users', (Request req) => Response.ok('[]'))",
    "  ..post('/api/users', (Request req) => Response(201));"
  ].join("\n");
}
