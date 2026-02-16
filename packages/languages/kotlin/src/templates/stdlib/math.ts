export function mathTemplate(): string {
  return [
    "val values = listOf(2.0, 4.0, 4.0, 4.0, 5.0)",
    "val mean = values.average()",
    "val variance = values.map { (it - mean) * (it - mean) }.average()",
    "val std = kotlin.math.sqrt(variance)",
    "println(\"${'$'}mean ${'$'}std\")"
  ].join("\n");
}
