export function channelsTemplate(): string {
  return [
    "import asyncio",
    "",
    "async def producer(queue: asyncio.Queue[int]) -> None:",
    "    for value in range(3):",
    "        await queue.put(value)",
    "    await queue.put(-1)",
    "",
    "async def consumer(queue: asyncio.Queue[int]) -> None:",
    "    while True:",
    "        value = await queue.get()",
    "        if value < 0:",
    "            break",
    "        print(value)",
    "",
    "async def main() -> None:",
    "    queue: asyncio.Queue[int] = asyncio.Queue()",
    "    await asyncio.gather(producer(queue), consumer(queue))",
    "",
    "asyncio.run(main())"
  ].join("\n");
}
