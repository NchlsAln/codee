"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyTemplate = propertyTemplate;
function propertyTemplate() {
    return [
        "import 'package:glados/glados.dart';",
        "",
        "void main() {",
        "  Glados2<int, int>().test('add commutes', (a, b) {",
        "    return a + b == b + a;",
        "  });",
        "}"
    ].join("\n");
}
