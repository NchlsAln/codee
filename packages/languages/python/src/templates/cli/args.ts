export function cliArgsTemplate(): string {
  return [
    "import argparse",
    "",
    "parser = argparse.ArgumentParser(description='Demo CLI')",
    "parser.add_argument('--count', type=int, default=1)",
    "args = parser.parse_args()",
    "",
    "print(f'count={args.count}')"
  ].join("\n");
}
