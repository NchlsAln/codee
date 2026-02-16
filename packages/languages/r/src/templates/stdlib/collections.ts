export function collectionsTemplate(): string {
  return [
    "nums <- c(1, 2, 3)",
    "names <- list(first = \"Ada\", last = \"Lovelace\")",
    "df <- data.frame(id = 1:3, value = nums)",
    "print(mean(df$value))"
  ].join("\n");
}
