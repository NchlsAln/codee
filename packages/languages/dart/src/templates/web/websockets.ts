export function websocketsTemplate(): string {
  return [
    "import 'package:shelf_web_socket/shelf_web_socket.dart';",
    "",
    "final handler = webSocketHandler((webSocket) {",
    "  webSocket.stream.listen((message) {",
    "    webSocket.sink.add('echo:$message');",
    "  });",
    "});"
  ].join("\n");
}
