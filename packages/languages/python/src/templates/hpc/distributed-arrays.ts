export function distributedArraysTemplate(): string {
  return [
    "import dask.array as da",
    "",
    "array = da.random.random((10000, 10000), chunks=(1000, 1000))",
    "mean = array.mean().compute()",
    "print('mean', mean)",
  ].join("\n");
}
