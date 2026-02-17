export function eventIndexerTemplate(): string {
  return [
    "from web3 import Web3",
    "",
    "web3 = Web3(Web3.HTTPProvider('https://rpc.example.com'))",
    "",
    "def fetch_logs(from_block: int, to_block: int) -> list[dict]:",
    "    return web3.eth.get_logs({",
    "        'fromBlock': from_block,",
    "        'toBlock': to_block,",
    "        'address': '0x0000000000000000000000000000000000000000',",
    "    })",
    "",
    "logs = fetch_logs(100, 120)",
    "print('logs', len(logs))",
  ].join("\n");
}
