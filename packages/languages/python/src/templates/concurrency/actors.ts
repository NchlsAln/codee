export function actorsTemplate(): string {
  return [
    "import queue",
    "import threading",
    "",
    "class Actor:",
    "    def __init__(self) -> None:",
    "        self._mailbox: queue.Queue[tuple[str, int]] = queue.Queue()",
    "        self._thread = threading.Thread(target=self._run, daemon=True)",
    "        self._thread.start()",
    "",
    "    def send(self, message: tuple[str, int]) -> None:",
    "        self._mailbox.put(message)",
    "",
    "    def _run(self) -> None:",
    "        while True:",
    "            action, value = self._mailbox.get()",
    "            if action == 'print':",
    "                print(value)",
    "",
    "actor = Actor()",
    "actor.send(('print', 42))"
  ].join("\n");
}
