export function controlTemplate(): string {
  return [
    "sys = tf(1, [1 1]);",
    "step(sys);"
  ].join("\n");
}
