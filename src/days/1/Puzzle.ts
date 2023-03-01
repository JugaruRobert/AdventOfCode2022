import { getGroups } from '../../helpers/get-groups';
import { numberSum } from '../../helpers/number-sum';
import { numberSort } from '../../helpers/number-sort';
import { parseIntoNumbers } from '../../helpers/parse-into-numbers';
import Puzzle from '../../types/AbstractPuzzle';

export default class ConcretePuzzle extends Puzzle {
  public solveFirst() {
    const groups = getGroups(this.input).map(parseIntoNumbers);
    const sums = groups.map(numberSum);
    return Math.max(...sums);
  }

  public solveSecond() {
    const groups = getGroups(this.input).map(parseIntoNumbers);
    const sums = groups.map(numberSum);
    return numberSum(sums.sort(numberSort()).slice(-3));
  }
}
