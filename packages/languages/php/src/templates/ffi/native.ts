export function ffiNativeTemplate(): string {
  return [
    "<?php",
    "if (extension_loaded('pdo_mysql')) {",
    "  echo 'pdo_mysql available';",
    "}",
    ""
  ].join("\n");
}
