export function httpServerTemplate(): string {
  return [
    "import 'dart:io';",
    "",
    "final server = await HttpServer.bind('0.0.0.0', 8080);",
    "await for (final req in server) {",
    "  req.response.write('ok');",
    "  await req.response.close();",
    "}"
  ].join("\n");
}
