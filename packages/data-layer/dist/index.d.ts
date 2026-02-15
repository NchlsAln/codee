export interface Migration {
    id: string;
    up: string;
}
export declare function getMigrations(): Migration[];
