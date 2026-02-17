"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.walletCustodyTemplate = walletCustodyTemplate;
function walletCustodyTemplate() {
  return [
    "from eth_account import Account",
    "",
    "account = Account.create()",
    "message = b'authorize-payment'",
    "signed = Account.sign_message(message, account.key)",
    "",
    "print('address', account.address)",
    "print('signature', signed.signature.hex())",
  ].join("\n");
}
