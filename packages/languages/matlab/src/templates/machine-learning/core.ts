export function machineLearningTemplate(): string {
  return [
    "Mdl = fitctree(X, y);",
    "pred = predict(Mdl, X);",
    "disp(pred(1:5))"
  ].join("\n");
}
