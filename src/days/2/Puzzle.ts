import { numberSum } from '../../helpers/number-sum';
import { splitIntoLines } from '../../helpers/split-into-lines';
import Puzzle from '../../types/AbstractPuzzle';
import { PuzzeResult } from '../../types/PuzzleInterface';

export default class ConcretePuzzle extends Puzzle {
  public solveFirst(): PuzzeResult {
    const possibleValues: Record<string, number> = {
      'A X': 4,
      'A Y': 8,
      'A Z': 3,

      'B X': 1,
      'B Y': 5,
      'B Z': 9,

      'C X': 7,
      'C Y': 2,
      'C Z': 6,
    };

    return numberSum(
      splitIntoLines(this.input).map((line) => possibleValues[line])
    );
  }

  public solveSecond(): PuzzeResult {
    const possibleValues: Record<string, number> = {
      'A X': 3,
      'A Y': 4,
      'A Z': 8,

      'B X': 1,
      'B Y': 5,
      'B Z': 9,

      'C X': 2,
      'C Y': 6,
      'C Z': 7,
    };

    return numberSum(
      splitIntoLines(this.input).map((line) => possibleValues[line])
    );
  }
}
