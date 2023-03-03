import Puzzle from '../../types/AbstractPuzzle';
import { PuzzeResult } from '../../types/PuzzleInterface';

export default class ConcretePuzzle extends Puzzle {
  public solveFirst(): PuzzeResult {
    return this.getIndexOfUniqueCharacters(4);
  }

  public solveSecond(): PuzzeResult {
    return this.getIndexOfUniqueCharacters(14);
  }

  private getIndexOfUniqueCharacters(count: number) {
    let i = count;
    for (i; i < this.input.length; i++) {
      const unique = new Set(this.input.slice(i - count, i));
      if (unique.size === count) {
        break;
      }
    }

    return i;
  }
}
