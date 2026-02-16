export function machineLearningTemplate(): string {
  return [
    "using MLJ",
    "model = @load RandomForestClassifier",
    "mach = machine(model, X, y)",
    "fit!(mach)"
  ].join("\n");
}
