export function huggingfaceTransformersTemplate(): string {
  return [
    "from transformers import AutoTokenizer, AutoModelForSequenceClassification, pipeline",
    "",
    "tokenizer = AutoTokenizer.from_pretrained('distilbert-base-uncased')",
    "model = AutoModelForSequenceClassification.from_pretrained('distilbert-base-uncased')",
    "",
    "pipe = pipeline('text-classification', model=model, tokenizer=tokenizer)",
    "result = pipe('A quick test for transformers')",
    "print(result)",
    "",
    "# Fine-tuning sketch",
    "# from datasets import load_dataset",
    "# dataset = load_dataset('imdb', split='train[:1%]')",
    "# tokenized = dataset.map(lambda x: tokenizer(x['text'], truncation=True), batched=True)",
  ].join("\n");
}
