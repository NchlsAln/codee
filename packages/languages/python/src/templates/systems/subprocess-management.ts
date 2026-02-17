export function subprocessManagementTemplate(): string {
  return [
    "import asyncio",
    "",
    "async def run(cmd):",
    "    proc = await asyncio.create_subprocess_exec(*cmd, stdout=asyncio.subprocess.PIPE)",
    "    out, _ = await proc.communicate()",
    "    return out.decode()",
    "",
    "async def main():",
    "    output = await run(['echo', 'hello'])",
    "    print(output)",
    "",
    "if __name__ == '__main__':",
    "    asyncio.run(main())",
  ].join("\n");
}
