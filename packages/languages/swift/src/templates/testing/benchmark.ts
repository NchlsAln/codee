export function benchmarkTemplate(): string {
  return [
    "import XCTest",
    "",
    "final class BenchTests: XCTestCase {",
    "  func testSort() {",
    "    measure { _ = [3, 1, 2].sorted() }",
    "  }",
    "}"
  ].join("\n");
}
