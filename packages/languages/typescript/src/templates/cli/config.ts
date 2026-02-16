export function cliConfigTemplate(): string {
  return [
    "import 'dotenv/config';",
    "",
    "const host = process.env.HOST ?? 'localhost';",
    "const port = Number(process.env.PORT ?? '8080');",
    "",
    "console.log({ host, port });"
  ].join("\n");
}
