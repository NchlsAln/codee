export function caretTemplate(): string {
  return [
    "library(caret)",
    "data(iris)",
    "model <- train(Species ~ ., data = iris, method = 'rf')",
    "print(model)"
  ].join("\n");
}
