"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parallelTemplate = parallelTemplate;
function parallelTemplate() {
    return [
        "import scala.concurrent.{ExecutionContext, Future}",
        "",
        "implicit val ec: ExecutionContext = ExecutionContext.global",
        "",
        "val tasks = List(1, 2, 3).map(n => Future(n * 2))",
        "val all = Future.sequence(tasks)",
        "all.foreach(values => println(values.mkString(\",\")))"
    ].join("\n");
}
