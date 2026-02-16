"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actorsTemplate = actorsTemplate;
function actorsTemplate() {
    return [
        "import 'dart:async';",
        "",
        "final inbox = StreamController<String>();",
        "inbox.stream.listen((msg) => print('got:$msg'));",
        "inbox.add('hello');",
        "await inbox.close();"
    ].join("\n");
}
