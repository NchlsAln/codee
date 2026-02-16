export function reportingTemplate(): string {
  return [
    "rmarkdown::render('report.Rmd')",
    "sessionInfo()"
  ].join("\n");
}
