export function collectionsTemplate(): string {
  return [
    "from collections import defaultdict, Counter",
    "",
    "words = [\"red\", \"blue\", \"red\", \"green\"]",
    "counts = Counter(words)",
    "",
    "groups = defaultdict(list)",
    "for word in words:",
    "    groups[word[0]].append(word)",
    "",
    "print(counts)",
    "print(groups)"
  ].join("\n");
}
