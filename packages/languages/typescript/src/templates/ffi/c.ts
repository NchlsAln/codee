export function ffiCTemplate(): string {
  return [
    "import ffi from 'ffi-napi';",
    "",
    "const lib = ffi.Library('./libmath', { add: ['int', ['int', 'int']] });",
    "",
    "console.log(lib.add(2, 3));"
  ].join("\n");
}
