export function reportingTemplate(): string {
  return [
    "ods pdf file='report.pdf';",
    "proc report data=work.cleaned; run;",
    "ods pdf close;"
  ].join("\n");
}
