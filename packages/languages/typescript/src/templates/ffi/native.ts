export function ffiNativeTemplate(): string {
  return [
    "const addon = require('./build/Release/addon.node');",
    "",
    "console.log(addon.add(2, 3));"
  ].join("\n");
}
