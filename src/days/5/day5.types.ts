export interface Move {
  count: number;
  from: number;
  to: number;
}

export interface ParsedData {
  boxes: string[][];
  moves: Move[];
}
