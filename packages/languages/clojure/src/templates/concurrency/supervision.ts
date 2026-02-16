export function supervisionTemplate(): string {
  return [
    "(def worker (future (Thread/sleep 50) :ok))",
    "(println @worker)"
  ].join("\n");
}
