export function wasiModulesTemplate(): string {
  return ["// WASI module example", "fn main() {", '    println!("Hello from WASI");', "}"].join(
    "\n",
  );
}
