export function asyncTemplate(): string {
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
