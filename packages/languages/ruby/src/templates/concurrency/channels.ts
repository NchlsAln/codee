export function channelsTemplate(): string {
  return [
    "queue = Queue.new",
    "queue << 'job-1'",
    "queue << 'job-2'",
    "puts queue.pop",
    "puts queue.pop"
  ].join("\n");
}
