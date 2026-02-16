export function servantTemplate(): string {
  return [
    "type API = \"health\" :> Get '[PlainText] String",
    "server :: Server API",
    "server = pure \"ok\""
  ].join("\n");
}
