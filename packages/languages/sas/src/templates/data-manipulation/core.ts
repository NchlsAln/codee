export function dataManipulationTemplate(): string {
  return [
    "data work.cleaned;",
    "  set work.raw;",
    "  if score > 80;",
    "  length group $20;",
    "run;",
    "proc sort data=work.cleaned; by group; run;"
  ].join("\n");
}
