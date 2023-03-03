import { splitIntoLines } from '../../helpers/split-into-lines';
import Puzzle from '../../types/AbstractPuzzle';
import { PuzzeResult } from '../../types/PuzzleInterface';
import { Move, ParsedData } from './day5.types';

export default class ConcretePuzzle extends Puzzle {
  public solveFirst(): PuzzeResult {
    const data = this.parseInput();
    data.moves.forEach((move) => {
      data.boxes = this.performMoveOneByOne(move, data.boxes);
    });

    return data.boxes.map((box) => box.at(-1)).join('');
  }

  public solveSecond(): PuzzeResult {
    const data = this.parseInput();
    data.moves.forEach((move) => {
      data.boxes = this.performMoveTogether(move, data.boxes);
    });

    return data.boxes.map((box) => box.at(-1)).join('');
  }

  private performMoveTogether(move: Move, boxes: string[][]) {
    const group = boxes[move.from - 1].splice(-move.count);
    boxes[move.to - 1] = boxes[move.to - 1].concat(group);
    return boxes;
  }

  private performMoveOneByOne(move: Move, boxes: string[][]) {
    for (let i = 0; i < move.count; i++) {
      boxes[move.to - 1].push(boxes[move.from - 1].pop());
    }

    return boxes;
  }

  private parseInput() {
    const lines = splitIntoLines(this.input);
    const boxCountLine = lines.findIndex((line) => line.startsWith(' 1'));
    const nrBoxes = parseInt(
      lines[boxCountLine]
        .split(' ')
        .filter((element) => element)
        .at(-1)
    );

    const moves: Move[] = lines.slice(boxCountLine + 2).map((line) => ({
      count: parseInt(line.split('move ')[1]),
      from: parseInt(line.split('from ')[1].split(' ')[0]),
      to: parseInt(line.split('to ')[1]),
    }));

    const boxLines = lines.slice(0, boxCountLine);
    const boxes: string[][] = [];
    for (let i = 0; i < nrBoxes; i++) {
      boxes.push([]);
    }

    boxLines.reverse().forEach((line) => {
      for (let i = 1; i < line.length; i += 4) {
        if (line[i] !== ' ') {
          boxes[(i - 1) / 4].push(line[i]);
        }
      }
    });

    return { boxes, moves } as ParsedData;
  }
}
