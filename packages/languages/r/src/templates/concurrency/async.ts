export function asyncTemplate(): string {
  return [
    "library(future.apply)",
    "plan(multisession)",
    "nums <- 1:4",
    "result <- future_lapply(nums, function(x) x * 2)",
    "print(result)"
  ].join("\n");
}
