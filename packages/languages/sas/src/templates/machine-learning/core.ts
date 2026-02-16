export function machineLearningTemplate(): string {
  return [
    "proc hpsplit data=work.cleaned;",
    "  class group;",
    "  model group = x y z;",
    "run;"
  ].join("\n");
}
