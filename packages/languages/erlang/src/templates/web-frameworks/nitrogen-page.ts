export function nitrogenPageTemplate(): string {
  return [
    "-module(health_page).",
    "-compile(export_all).",
    "",
    "main() ->",
    "  [#panel{body=[\"ok\"]}]."
  ].join("\n");
}
