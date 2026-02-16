export function ffiCTemplate(): string {
  return [
    "import 'dart:ffi';",
    "",
    "final lib = DynamicLibrary.open('native');",
    "final add = lib.lookupFunction<Int32 Function(Int32, Int32), int Function(int, int)>('add');",
    "print(add(1, 2));"
  ].join("\n");
}
