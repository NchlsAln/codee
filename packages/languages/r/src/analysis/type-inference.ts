export function inferRTypes(source: string): Record<string, string> {
  const inferred: Record<string, string> = {};
  const lines = source.split(/\r?\n/);

  for (const line of lines) {
    const stringLiteral = line.match(/(\w+)\s*<-\s*\".*\"/);
    if (stringLiteral?.[1]) {
      inferred[stringLiteral[1]] = "string";
      continue;
    }

    const numericLiteral = line.match(/(\w+)\s*<-\s*\d+(?:\.\d+)?/);
    if (numericLiteral?.[1]) {
      inferred[numericLiteral[1]] = "numeric";
      continue;
    }

    const vectorLiteral = line.match(/(\w+)\s*<-\s*c\(/);
    if (vectorLiteral?.[1]) {
      inferred[vectorLiteral[1]] = "vector";
      continue;
    }

    const dataFrame = line.match(/(\w+)\s*<-\s*(data\.frame|tibble)\(/);
    if (dataFrame?.[1]) {
      inferred[dataFrame[1]] = "data.frame";
      continue;
    }

    const factorLiteral = line.match(/(\w+)\s*<-\s*factor\(/);
    if (factorLiteral?.[1]) {
      inferred[factorLiteral[1]] = "factor";
      continue;
    }

    const logicalLiteral = line.match(/(\w+)\s*<-\s*(TRUE|FALSE)\b/);
    if (logicalLiteral?.[1]) {
      inferred[logicalLiteral[1]] = "logical";
      continue;
    }

    const dateLiteral = line.match(/(\w+)\s*<-\s*as\.Date\(/);
    if (dateLiteral?.[1]) {
      inferred[dateLiteral[1]] = "Date";
      continue;
    }

    const listLiteral = line.match(/(\w+)\s*<-\s*list\(/);
    if (listLiteral?.[1]) {
      inferred[listLiteral[1]] = "list";
    }
  }

  return inferred;
}
