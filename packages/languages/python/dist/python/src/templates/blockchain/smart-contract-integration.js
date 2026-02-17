"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.smartContractIntegrationTemplate = smartContractIntegrationTemplate;
function smartContractIntegrationTemplate() {
  return [
    "from web3 import Web3",
    "",
    "web3 = Web3(Web3.HTTPProvider('https://rpc.example.com'))",
    "contract = web3.eth.contract(",
    "    address=web3.to_checksum_address('0x0000000000000000000000000000000000000000'),",
    "    abi=[],",
    ")",
    "",
    "def read_balance(wallet: str) -> int:",
    "    return contract.functions.balanceOf(wallet).call()",
    "",
    "print(read_balance(web3.eth.accounts[0]))",
  ].join("\n");
}
