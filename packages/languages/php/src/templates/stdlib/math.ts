export function mathTemplate(): string {
  return [
    "<?php",
    "$values = [1, 4, 9, 16];",
    "$roots = array_map(fn($n) => sqrt($n), $values);",
    "$sum = array_sum($values);",
    "$avg = $sum / count($values);",
    "echo implode(',', $roots) . \" avg=\" . $avg;"
  ].join("\n");
}
