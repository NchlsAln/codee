export function configurationTemplate(): string {
  return [
    "<config>",
    "  <env>prod</env>",
    "  <feature name=\"beta\">false</feature>",
    "</config>"
  ].join("\n");
}
