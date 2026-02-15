export interface Migration {
  id: string;
  up: string;
}

export function getMigrations(): Migration[] {
  return [];
}
