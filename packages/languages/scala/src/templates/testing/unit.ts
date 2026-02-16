export function unitTemplate(): string {
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
