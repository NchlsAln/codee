export function statisticsTemplate(): string {
  return [
    "mdl = fitlm(tbl, 'y ~ x + z');",
    "disp(mdl);",
    "[h,p] = ttest(x, y);"
  ].join("\n");
}
