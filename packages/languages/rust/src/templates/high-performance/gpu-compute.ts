export function gpuComputeTemplate(): string {
  return [
    "// wgpu compute example (sketch)",
    "// create instance, device, queue, and compute pipeline",
    "// dispatch workgroups and read back buffer",
  ].join("\n");
}
