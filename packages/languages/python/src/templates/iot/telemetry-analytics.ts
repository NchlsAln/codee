export function telemetryAnalyticsTemplate(): string {
  return [
    "import pandas as pd",
    "",
    "data = pd.DataFrame(",
    "    [",
    "        {'device_id': 'a', 'temp_c': 21.2},",
    "        {'device_id': 'a', 'temp_c': 22.4},",
    "        {'device_id': 'b', 'temp_c': 19.8},",
    "    ]",
    ")",
    "summary = data.groupby('device_id')['temp_c'].agg(['mean', 'max'])",
    "print(summary)",
  ].join("\n");
}
