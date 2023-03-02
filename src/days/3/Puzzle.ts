import { numberSum } from '../../helpers/number-sum';
import { splitIntoLines } from '../../helpers/split-into-lines';
import Puzzle from '../../types/AbstractPuzzle';
import { PuzzeResult } from '../../types/PuzzleInterface';

export default class ConcretePuzzle extends Puzzle {
  public solveFirst(): PuzzeResult {
    return numberSum(
      splitIntoLines(this.input).map((line) =>
        this.getCharValue(this.commonCharacter(line))
      )
    );
  }

  public solveSecond(): PuzzeResult {
    const lines = splitIntoLines(this.input);
    let sum = 0;

    for (let i = 0; i < lines.length; i += 3) {
      const uniqueCharacter = this.getCommonCharacters(
        this.getCommonCharacters(lines[i], lines[i + 1]),
        lines[i + 2]
      );

      sum += this.getCharValue(uniqueCharacter);
    }

    return sum;
  }

  private commonCharacter(line: string) {
    const unique = new Set(line.slice(0, line.length / 2));
    return line
      .slice(line.length / 2)
      .split('')
      .filter((char) => unique.has(char))[0];
  }

  private getCharValue(char: string) {
    const value = char.charCodeAt(0);

    if (value >= 'a'.charCodeAt(0) && value <= 'z'.charCodeAt(0)) {
      return value - 'a'.charCodeAt(0) + 1;
    }

    return value - 'A'.charCodeAt(0) + 27;
  }

  private getCommonCharacters(first: string, second: string) {
    const unique = new Set(first);
    return second
      .split('')
      .filter((char) => unique.has(char))
      .join('');
  }
}
