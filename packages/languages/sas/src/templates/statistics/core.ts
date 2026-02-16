export function statisticsTemplate(): string {
  return [
    "proc reg data=work.cleaned;",
    "  model y = x z;",
    "run;",
    "proc ttest data=work.cleaned;",
    "  class group;",
    "  var score;",
    "run;"
  ].join("\n");
}
