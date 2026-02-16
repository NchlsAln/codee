export function optimizationTemplate(): string {
  return [
    "using JuMP, HiGHS",
    "model = Model(HiGHS.Optimizer)",
    "@variable(model, x >= 0)",
    "@objective(model, Min, x)",
    "optimize!(model)"
  ].join("\n");
}
