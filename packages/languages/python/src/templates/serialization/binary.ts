export function binaryTemplate(): string {
  return [
    "import pickle",
    "",
    "payload = {\"id\": 1, \"name\": \"Ada\"}",
    "blob = pickle.dumps(payload)",
    "restored = pickle.loads(blob)",
    "print(restored)"
  ].join("\n");
}
