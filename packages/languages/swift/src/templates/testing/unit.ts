export function unitTemplate(): string {
  return [
    "import XCTest",
    "",
    "final class MathTests: XCTestCase {",
    "  func testAdd() {",
    "    XCTAssertEqual(1 + 1, 2)",
    "  }",
    "}"
  ].join("\n");
}
