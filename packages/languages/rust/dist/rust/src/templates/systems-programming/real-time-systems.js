"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.realTimeSystemsTemplate = realTimeSystemsTemplate;
function realTimeSystemsTemplate() {
  return [
    "use std::time::Duration;",
    "use std::thread;",
    "",
    "fn main() {",
    "    loop {",
    "        // deterministic work chunk",
    "        thread::sleep(Duration::from_millis(1));",
    "    }",
    "}",
  ].join("\n");
}
