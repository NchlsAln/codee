export function channelsTemplate(): string {
  return [
    "class Channel<T> {",
    "  private queue: T[] = [];",
    "  send(value: T): void {",
    "    this.queue.push(value);",
    "  }",
    "  receive(): T | undefined {",
    "    return this.queue.shift();",
    "  }",
    "}",
    "",
    "const channel = new Channel<number>();",
    "channel.send(1);",
    "channel.send(2);",
    "console.log(channel.receive());"
  ].join("\n");
}
