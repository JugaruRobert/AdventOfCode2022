export interface PuzzleInterface {
  solveFirst: () => PuzzeResult;
  solveSecond: () => PuzzeResult;
}

export type PuzzeResult = string | number;
