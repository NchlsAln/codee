"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.channelsTemplate = channelsTemplate;
function channelsTemplate() {
    return [
        "import zio.{Runtime, ZIO, Queue}",
        "",
        "val program = for {",
        "  q <- Queue.unbounded[String]",
        "  _ <- q.offer(\"work\")",
        "  v <- q.take",
        "} yield v",
        "",
        "val result = Runtime.default.unsafeRun(program)",
        "println(result)"
    ].join("\n");
}
