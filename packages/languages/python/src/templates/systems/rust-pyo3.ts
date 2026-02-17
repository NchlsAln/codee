export function rustPyo3Template(): string {
  return [
    "# Cargo.toml uses pyo3 and maturin",
    "# [lib] crate-type = ['cdylib']",
    "",
    "# lib.rs",
    "# use pyo3::prelude::*;",
    "# #[pyfunction] fn add(a: i32, b: i32) -> i32 { a + b }",
    "# #[pymodule] fn fastmod(_py: Python, m: &PyModule) -> PyResult<()> {",
    "#     m.add_function(wrap_pyfunction!(add, m)?)?;",
    "#     Ok(())",
    "# }",
  ].join("\n");
}
