"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncTemplate = asyncTemplate;
function asyncTemplate() {
    return [
        "Future<String> fetch() async {",
        "  await Future.delayed(const Duration(milliseconds: 100));",
        "  return \"done\";",
        "}",
        "",
        "void main() async {",
        "  final result = await fetch();",
        "  print(result);",
        "}"
    ].join("\n");
}
