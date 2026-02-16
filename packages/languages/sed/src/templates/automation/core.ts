export function automationTemplate(): string {
  return [
    "sed -n '10,20p' input.txt",
    "sed -n '/ERROR/p' app.log"
  ].join("\n");
}
