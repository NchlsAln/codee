export function parallelTemplate(): string {
  return [
    "use rayon::prelude::*;",
    "",
    "let values = vec![1, 2, 3, 4];",
    "let squares: Vec<_> = values.par_iter().map(|v| v * v).collect();",
    "",
    "println!(\"{:?}\", squares);"
  ].join("\n");
}
