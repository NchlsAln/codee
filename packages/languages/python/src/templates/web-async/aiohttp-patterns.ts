export function aiohttpPatternsTemplate(): string {
  return [
    "from aiohttp import web, ClientSession",
    "",
    "async def handle(request):",
    "    async with ClientSession() as session:",
    "        async with session.get('https://example.com') as resp:",
    "            data = await resp.text()",
    "    return web.Response(text=data)",
    "",
    "app = web.Application()",
    "app.router.add_get('/', handle)",
    "",
    "if __name__ == '__main__':",
    "    web.run_app(app, port=8000)",
  ].join("\n");
}
