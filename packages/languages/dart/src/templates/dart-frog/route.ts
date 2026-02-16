export function dartFrogTemplate(): string {
  return [
    "import 'package:dart_frog/dart_frog.dart';",
    "",
    "Response onRequest(RequestContext context) {",
    "  return Response(body: 'hello');",
    "}"
  ].join("\n");
}
