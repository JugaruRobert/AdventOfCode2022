import { splitIntoLines } from '../../helpers/split-into-lines';
import Puzzle from '../../types/AbstractPuzzle';
import { PuzzeResult } from '../../types/PuzzleInterface';

export default class ConcretePuzzle extends Puzzle {
  public solveFirst(): PuzzeResult {
    const lines = splitIntoLines(this.input);
    return lines.filter((line) => this.rangesFullyContained(line)).length;
  }

  public solveSecond(): PuzzeResult {
    const lines = splitIntoLines(this.input);
    return lines.filter((line) => this.rangesContained(line)).length;
  }

  private rangesContained(line: string) {
    const pairs = line.split(',');
    const firstPair = this.getPairValues(pairs[0]);
    const secondPair = this.getPairValues(pairs[1]);
    return !(firstPair[1] < secondPair[0] || firstPair[0] > secondPair[1]);
  }

  private rangesFullyContained(line: string) {
    const pairs = line.split(',');
    const firstPair = this.getPairValues(pairs[0]);
    const secondPair = this.getPairValues(pairs[1]);

    return (
      this.isContained(firstPair, secondPair) ||
      this.isContained(secondPair, firstPair)
    );
  }

  private getPairValues = (pair: string) => pair.split('-').map(Number);

  private isContained(firstPair: number[], secondPair: number[]) {
    return firstPair[0] <= secondPair[0] && firstPair[1] >= secondPair[1];
  }
}
