import { PuzzeResult, PuzzleInterface } from './PuzzleInterface';

export default abstract class Puzzle implements PuzzleInterface {
  protected input: string;

  public async setInput(input: string) {
    this.input = input;
  }

  public abstract solveFirst(): PuzzeResult;
  public abstract solveSecond(): PuzzeResult;
}
