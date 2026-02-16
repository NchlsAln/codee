"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncTemplate = asyncTemplate;
function asyncTemplate() {
    return [
        "import scala.concurrent.{ExecutionContext, Future}",
        "import scala.util.{Failure, Success}",
        "",
        "implicit val ec: ExecutionContext = ExecutionContext.global",
        "",
        "val work = Future { 1 + 1 }",
        "work.onComplete {",
        "  case Success(value) => println(value)",
        "  case Failure(ex) => println(ex.getMessage)",
        "}"
    ].join("\n");
}
