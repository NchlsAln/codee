export function mlTemplate(): string {
  return [
    "load fisheriris",
    "mdl = fitctree(meas, species);",
    "view(mdl, 'Mode', 'graph');"
  ].join("\n");
}
