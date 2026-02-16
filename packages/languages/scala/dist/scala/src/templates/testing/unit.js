"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unitTemplate = unitTemplate;
function unitTemplate() {
    return [
        "import org.scalatest.funsuite.AnyFunSuite",
        "",
        "class MathSpec extends AnyFunSuite {",
        "  test(\"add\") {",
        "    assert(1 + 1 == 2)",
        "  }",
        "}"
    ].join("\n");
}
