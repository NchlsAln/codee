export function textProcessingTemplate(): string {
  return [
    "awk '/ERROR|WARN/ { print $0 }' app.log",
    "awk '{ gsub(/[[:space:]]+/, \" \"); print }' input.txt"
  ].join("\n");
}
