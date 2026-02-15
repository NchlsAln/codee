import { DocumentationBundle } from "./types";
export declare class DocumentationGenerator {
    generate(options: {
        projectName: string;
        overview: string;
        entryPoints: string[];
    }): DocumentationBundle;
}
