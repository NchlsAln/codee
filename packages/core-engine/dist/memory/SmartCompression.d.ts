export interface ContextSection {
    id: string;
    title: string;
    content: string;
    priority: number;
}
export declare class SmartCompression {
    estimateTokens(content: string): number;
    compress(sections: ContextSection[], tokenBudget: number): ContextSection[];
    truncate(content: string, tokenBudget: number): string;
    summarize(content: string): string;
}
