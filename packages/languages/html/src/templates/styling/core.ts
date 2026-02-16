export function stylingTemplate(): string {
  return [
    "<link rel=\"stylesheet\" href=\"styles.css\">",
    "<div class=\"card\">Styled content</div>"
  ].join("\n");
}
