import { Board } from "./Board";
import { Score } from "./Score";

/**
 * @class Player
 * @classdesc Esta clase representa un jugador del juego SOS.
 * @version 1.0.4
 */
export class Player {
  private readonly name: string;
  private readonly board: Board;
  private readonly score: Score;

  constructor(name: string, board: Board) {
    this.name = name;
    this.board = board;
    this.score = new Score();
  }

  public getName(): string {
    return this.name;
  }

  public getBoard(): Board {
    return this.board;
  }

  public getScore(): number {
    return this.score.getScore();
  }

  public makeMove(row: number, col: number, letter: string): boolean {
    const currentValue = this.board.getCell(row, col);
    if (currentValue !== "") {
      return false;
    }
    this.board.setCell(row, col, letter);
    if (this.board.checkSOS(this)) {
      this.score.setScore(1);
    }
    return true;
  }
}
