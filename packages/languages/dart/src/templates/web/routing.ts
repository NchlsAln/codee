export function routingTemplate(): string {
  return [
    "import 'package:shelf/shelf.dart';",
    "import 'package:shelf_router/shelf_router.dart';",
    "",
    "final router = Router()",
    "  ..get('/health', (Request req) => Response.ok('ok'))",
    "  ..get('/users/<id>', (Request req, String id) => Response.ok('user:$id'));"
  ].join("\n");
}
