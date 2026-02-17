export function simdOptimizationTemplate(): string {
  return [
    "use std::simd::f32x4;",
    "",
    "fn add_simd(a: [f32; 4], b: [f32; 4]) -> [f32; 4] {",
    "    let va = f32x4::from_array(a);",
    "    let vb = f32x4::from_array(b);",
    "    (va + vb).to_array()",
    "}",
  ].join("\n");
}
