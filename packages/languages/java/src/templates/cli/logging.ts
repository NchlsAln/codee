export function cliLoggingTemplate(): string {
  return "import org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\n\npublic class LoggingSample {\n  private static final Logger logger = LoggerFactory.getLogger(LoggingSample.class);\n\n  public static void main(String[] args) {\n    logger.info(\"service started\");\n  }\n}\n";
}
