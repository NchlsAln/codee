"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataScienceTemplate = dataScienceTemplate;
function dataScienceTemplate() {
  return [
    "import pandas as pd",
    "import numpy as np",
    "",
    "df = pd.DataFrame({'a': [1, 2, 3], 'b': [4, 5, 6]})",
    "df['c'] = df['a'] + df['b']",
    "",
    "arr = np.asarray(df[['a', 'b']])",
    "print(arr.mean(axis=0))",
    "",
    "# Polars and Dask alternatives",
    "# import polars as pl",
    "# import dask.dataframe as dd",
  ].join("\n");
}
