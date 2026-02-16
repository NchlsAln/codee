export function supervisionTemplate(): string {
  return [
    "require 'concurrent'",
    "pool = Concurrent::FixedThreadPool.new(2)",
    "pool.post { puts 'worker' }",
    "pool.shutdown",
    "pool.wait_for_termination"
  ].join("\n");
}
