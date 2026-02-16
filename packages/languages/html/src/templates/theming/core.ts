export function themingTemplate(): string {
  return [
    "<body data-theme=\"dark\">",
    "  <div class=\"panel\">Theme me</div>",
    "</body>"
  ].join("\n");
}
