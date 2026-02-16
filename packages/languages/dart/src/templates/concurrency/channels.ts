export function channelsTemplate(): string {
  return [
    "import 'dart:async';",
    "",
    "final controller = StreamController<String>();",
    "controller.stream.listen(print);",
    "controller.add('work');",
    "await controller.close();"
  ].join("\n");
}
