export function karaxTemplate(): string {
  return [
    "import karax/[karax, vdom]",
    "proc view(): VNode =",
    "  buildHtml(tdiv):",
    "    text \"hello\"",
    "setRenderer(view)"
  ].join("\n");
}
