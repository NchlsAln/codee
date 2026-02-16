export function cliConfigTemplate(): string {
  return [
    "import java.util.Properties",
    "",
    "val props = Properties()",
    "props.load(ClassLoader.getSystemResourceAsStream(\"app.properties\"))",
    "println(props.getProperty(\"server.host\"))"
  ].join("\n");
}
