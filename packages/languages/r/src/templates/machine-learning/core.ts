export function machineLearningTemplate(): string {
  return [
    "library(caret)",
    "set.seed(42)",
    "model <- train(y ~ ., data = df, method = 'rf')",
    "print(model)"
  ].join("\n");
}
