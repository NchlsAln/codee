export function ioTemplate(): string {
  return [
    "<?php",
    "$path = __DIR__ . \"/data.txt\";",
    "file_put_contents($path, \"hello\\n\", FILE_APPEND);",
    "$contents = file_get_contents($path);",
    "echo $contents;"
  ].join("\n");
}
