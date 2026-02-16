export function concurrencyTemplate(): string {
  return [
    "import std/[asyncdispatch, threadpool, atomics]",
    "proc run() {.async.} =",
    "  await sleepAsync(50)",
    "discard waitFor run()",
    "proc work() = discard",
    "spawn work()",
    "var ch: Channel[int]",
    "ch.open()",
    "ch.send(1)",
    "discard ch.recv()",
    "var atom = initAtomic(0)",
    "discard atom.compareExchange(0, 1)"
  ].join("\n");
}
