export function textProcessingTemplate(): string {
  return [
    "sed 's/[[:space:]]\\+/ /g' input.txt",
    "sed '/^#/d' config.ini"
  ].join("\n");
}
