export function dataManipulationTemplate(): string {
  return [
    "tbl = table(group, score)",
    "summary = groupsummary(tbl, 'group', 'mean', 'score');",
    "disp(summary)"
  ].join("\n");
}
