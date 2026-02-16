"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unitTemplate = unitTemplate;
function unitTemplate() {
    return [
        "import 'package:test/test.dart';",
        "",
        "void main() {",
        "  test('add', () {",
        "    expect(1 + 1, equals(2));",
        "  });",
        "}"
    ].join("\n");
}
