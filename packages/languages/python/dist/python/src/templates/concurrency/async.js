"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncTemplate = asyncTemplate;
function asyncTemplate() {
    return [
        "import asyncio",
        "",
        "async def fetch(name: str, delay: float) -> str:",
        "    await asyncio.sleep(delay)",
        "    return f\"{name} done\"",
        "",
        "async def main() -> None:",
        "    results = await asyncio.gather(",
        "        fetch(\"a\", 0.2),",
        "        fetch(\"b\", 0.1),",
        "    )",
        "    print(results)",
        "",
        "if __name__ == \"__main__\":",
        "    asyncio.run(main())"
    ].join("\n");
}
