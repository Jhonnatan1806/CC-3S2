import { Board } from "./Board";
import { GameMode } from "./GameMode";
import { Score } from "./Score";

/**
 * @class Player
 * @classdesc Esta clase representa un jugador del juego SOS.
 * @version 1.0.3
 */
export class Player {
  private readonly name: string;

  private score: Score;

  constructor(name: string) {
    this.name = name;
    this.score = new Score();
  }

  public getName(): string {
    return this.name;
  }

  public getScore(): number {
    return this.score.getScore();
  }

  public makeMove(
    board: Board,
    row: number,
    col: number,
    letter: string
  ): boolean {
    const currentValue = board.getCellValue(row, col);
    if (currentValue !== "") {
      return false; // La celda ya está ocupada
    }
    board.setCellValue(row, col, letter);
    if (board.checkSOS(row, col, letter)) {
      this.score.setScore(1);
    }
    return true;
  }
}
