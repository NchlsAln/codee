export function mathTemplate(): string {
  return "public class MathSample {\n  public static void main(String[] args) {\n    double[] values = {2, 4, 4, 4, 5};\n    double sum = 0;\n    for (double v : values) {\n      sum += v;\n    }\n    double mean = sum / values.length;\n    double variance = 0;\n    for (double v : values) {\n      variance += Math.pow(v - mean, 2);\n    }\n    variance /= values.length;\n    double std = Math.sqrt(variance);\n\n    System.out.println(mean + \" \" + std);\n  }\n}\n";
}
