export function ffiNativeTemplate(): string {
  return [
    "(import '(java.lang Math))",
    "(println (Math/abs -3))"
  ].join("\n");
}
