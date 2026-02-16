export function sparkJobTemplate(): string {
  return [
    "import org.apache.spark.sql.SparkSession",
    "",
    "val spark = SparkSession.builder()",
    "  .appName(\"Demo\")",
    "  .getOrCreate()",
    "",
    "import spark.implicits._",
    "val df = Seq(1, 2, 3).toDF(\"value\")",
    "df.groupBy().sum(\"value\").show()",
    "spark.stop()"
  ].join("\n");
}
