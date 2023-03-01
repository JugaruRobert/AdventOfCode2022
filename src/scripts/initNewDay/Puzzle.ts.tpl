import Puzzle from '../../types/AbstractPuzzle';

export default class ConcretePuzzle extends Puzzle {
  public solveFirst(): string {
    return 'unsolved';
  }

  public solveSecond(): string {
    return 'unsolved';
  }
}
