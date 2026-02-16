export function ffiCTemplate(): string {
  return "package main\n\n/*\n#cgo CFLAGS: -I.\nint add(int a, int b);\n*/\nimport \"C\"\n\nimport \"fmt\"\n\nfunc main() {\n  fmt.Println(C.add(2, 3))\n}\n";
}
