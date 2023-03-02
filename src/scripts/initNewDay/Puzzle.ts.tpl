import Puzzle from '../../types/AbstractPuzzle';
import { PuzzeResult } from '../../types/PuzzleInterface';

export default class ConcretePuzzle extends Puzzle {
  public solveFirst(): PuzzeResult {
    return 'unsolved';
  }

  public solveSecond(): PuzzeResult {
    return 'unsolved';
  }
}
