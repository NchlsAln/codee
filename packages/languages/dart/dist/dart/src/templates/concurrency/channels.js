"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.channelsTemplate = channelsTemplate;
function channelsTemplate() {
    return [
        "import 'dart:async';",
        "",
        "final controller = StreamController<String>();",
        "controller.stream.listen(print);",
        "controller.add('work');",
        "await controller.close();"
    ].join("\n");
}
