"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unitTemplate = unitTemplate;
function unitTemplate() {
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
