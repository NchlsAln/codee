export function actorsTemplate(): string {
  return [
    "import 'dart:async';",
    "",
    "final inbox = StreamController<String>();",
    "inbox.stream.listen((msg) => print('got:$msg'));",
    "inbox.add('hello');",
    "await inbox.close();"
  ].join("\n");
}
