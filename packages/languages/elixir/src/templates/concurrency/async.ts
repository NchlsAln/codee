export function asyncTemplate(): string {
  return [
    "task = Task.async(fn -> 42 end)",
    "IO.inspect(Task.await(task))"
  ].join("\n");
}
