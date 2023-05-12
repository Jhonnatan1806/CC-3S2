import { Letter } from "./Letter";
import { Player } from "./Player";
import { Board } from "./Board";
import { Mode } from "./Mode";

/**
 * @class IA
 * @classdesc Representa un jugador IA.
 * @extends Player
 */
export class IA extends Player {
  private readonly depth: number;
  private readonly mode: Mode = Mode.SIMPLE_GAME;

  constructor(name: string, depth: number) {
    super(name);
    this.depth = depth;
  }

  // función para evaluar la utilidad de un estado del tablero
  public evaluateBoard(board: Board): number {
    const sosCount = board.checkSOS(this.mode);
    return sosCount + Math.random() * 0.1;
  }

  // algoritmo Minimax con poda alfa-beta
  public minimax(
    board: Board,
    maximizingPlayer: boolean,
    alpha: number,
    beta: number,
    currentDepth: number
  ): [number, number] {
    if (board.checkSOS(this.mode) > 0 || currentDepth === this.depth) {
      return [0, this.evaluateBoard(board)];
    }

    let bestRow = 0;
    let bestColumn = 0;
    let bestValue: number | null = null;

    let currentLetter = maximizingPlayer ? Letter.O : Letter.S;

    for (let i = 0; i < board.getRows(); i++) {
      for (let j = 0; j < board.getColumns(); j++) {
        if (board.getCell(i, j) === "") {
          const newBoard = board.clone();
          newBoard.setCell(i, j, currentLetter);
          const [_, value] = this.minimax(
            newBoard,
            !maximizingPlayer,
            alpha,
            beta,
            currentDepth + 1
          );
          if (
            bestValue === null ||
            (maximizingPlayer && value > bestValue) ||
            (!maximizingPlayer && value < bestValue)
          ) {
            bestRow = i;
            bestColumn = j;
            bestValue = value;
          }
          if (maximizingPlayer) {
            alpha = Math.max(alpha, value);
          } else {
            beta = Math.min(beta, value);
          }
          if (beta <= alpha) {
            break;
          }
        }
      }
    }
    return [bestRow, bestColumn];
  }
}
