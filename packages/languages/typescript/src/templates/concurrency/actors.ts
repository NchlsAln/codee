export function actorsTemplate(): string {
  return [
    "type Message = { type: 'print'; value: number };",
    "",
    "class Actor {",
    "  private readonly mailbox: Message[] = [];",
    "  send(message: Message): void {",
    "    this.mailbox.push(message);",
    "    this.drain();",
    "  }",
    "  private drain(): void {",
    "    while (this.mailbox.length > 0) {",
    "      const msg = this.mailbox.shift();",
    "      if (msg?.type === 'print') {",
    "        console.log(msg.value);",
    "      }",
    "    }",
    "  }",
    "}",
    "",
    "const actor = new Actor();",
    "actor.send({ type: 'print', value: 42 });"
  ].join("\n");
}
