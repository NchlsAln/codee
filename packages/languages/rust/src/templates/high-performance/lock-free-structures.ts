export function lockFreeStructuresTemplate(): string {
  return [
    "use crossbeam::queue::SegQueue;",
    "use std::sync::Arc;",
    "",
    "let queue: Arc<SegQueue<u32>> = Arc::new(SegQueue::new());",
    "queue.push(1);",
    "if let Some(v) = queue.pop() {",
    '    println!("{}", v);',
    "}",
  ].join("\n");
}
