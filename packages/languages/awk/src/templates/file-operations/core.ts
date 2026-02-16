export function fileOperationsTemplate(): string {
  return [
    "awk 'BEGIN { print \"header\" } { print }' input.txt > output.txt",
    "awk '{ print $0 }' input.txt > copy.txt",
    "awk 'END { print NR \" lines\" }' input.txt"
  ].join("\n");
}
