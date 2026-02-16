export function jsonTemplate(): string {
  return [
    "<?php",
    "$payload = ['id' => 1, 'name' => 'Ada'];",
    "$json = json_encode($payload);",
    "$data = json_decode($json, true);",
    "var_dump($data);"
  ].join("\n");
}
