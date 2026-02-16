"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.benchmarkTemplate = benchmarkTemplate;
function benchmarkTemplate() {
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
