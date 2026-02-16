export function asyncTemplate(): string {
  return [
    "const sleep = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));",
    "",
    "async function fetchData(name: string, delay: number): Promise<string> {",
    "  await sleep(delay);",
    "  return `${name} done`;",
    "}",
    "",
    "async function main(): Promise<void> {",
    "  const results = await Promise.all([fetchData('a', 200), fetchData('b', 100)]);",
    "  console.log(results);",
    "}",
    "",
    "main().catch(console.error);"
  ].join("\n");
}
