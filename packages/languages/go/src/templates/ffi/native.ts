export function ffiNativeTemplate(): string {
  return "package main\n\nimport (\n  \"plugin\"\n)\n\nfunc main() {\n  p, _ := plugin.Open(\"./plugin.so\")\n  _, _ = p.Lookup(\"Add\")\n}\n";
}
