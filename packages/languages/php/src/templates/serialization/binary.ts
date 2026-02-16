export function binaryTemplate(): string {
  return [
    "<?php",
    "$packed = pack('N', 42);",
    "$unpacked = unpack('Nvalue', $packed);",
    "var_dump($unpacked['value']);"
  ].join("\n");
}
