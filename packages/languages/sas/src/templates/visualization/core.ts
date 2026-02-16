export function visualizationTemplate(): string {
  return [
    "proc sgplot data=work.cleaned;",
    "  scatter x=x y=y;",
    "  reg x=x y=y;",
    "run;"
  ].join("\n");
}
