"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ragSystemsTemplate = ragSystemsTemplate;
function ragSystemsTemplate() {
  return [
    "from typing import Iterable",
    "",
    "def chunk(text: str, size: int = 300) -> Iterable[str]:",
    "    for idx in range(0, len(text), size):",
    "        yield text[idx : idx + size]",
    "",
    "def embed(text: str) -> list[float]:",
    "    return [float(ord(char) % 10) for char in text[:16]]",
    "",
    "def search(query: str, docs: list[str]) -> list[str]:",
    "    query_vec = embed(query)",
    "    scored = []",
    "    for doc in docs:",
    "        score = sum(a * b for a, b in zip(query_vec, embed(doc)))",
    "        scored.append((score, doc))",
    "    scored.sort(reverse=True)",
    "    return [doc for _, doc in scored[:3]]",
    "",
    "documents = ['shipping policy', 'refund policy', 'account setup guide']",
    "context = search('refunds', documents)",
    "print('context:', context)",
  ].join("\n");
}
