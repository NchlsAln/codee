"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.binaryTemplate = binaryTemplate;
function binaryTemplate() {
    return [
        "data = :erlang.term_to_binary(%{id: 1})",
        "decoded = :erlang.binary_to_term(data)",
        "IO.inspect(decoded)"
    ].join("\n");
}
