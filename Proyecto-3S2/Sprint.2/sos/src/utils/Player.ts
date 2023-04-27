import { Board } from './Board';
import { Score } from './Score';

/**
 * @class Player
 * @classdesc Esta clase representa un jugador del juego SOS.
 * @version 1.0.2
 */
export class Player {

  private readonly name: string;

  private score: Score; 

  /**
   * Crea un nuevo jugador con el nombre especificado.
   * @constructor
   * @param {string} name El nombre del jugador.
   */
  constructor (name: string) {
    this.name = name;
    this.score = new Score();
  }

  /**
   * Devuelve el nombre del jugador.
   * @returns {string} El nombre del jugador.
   */
  public getName(): string {
    return this.name;
  }

  /**
   * Devuelve el puntaje actual del jugador.
   * @returns {number} El puntaje del jugador.
   */
  public getScore(): number {
    return this.score.getScore();
  }



  /**
   * Realiza un movimiento en el tablero en la celda especificada.
   * @param {number} row - La fila de la celda.
   * @param {number} col - La columna de la celda.
   * @param {string} letter - La letra que se desea colocar en la celda.
   * @returns {boolean} True si el movimiento fue exitoso, False si no lo fue.
   */
  public makeMove(board: Board, row: number, col: number, letter: string): boolean {
    const currentValue = board.getCellValue(row, col);
    if (currentValue !== "") {
      return false; // La celda ya está ocupada
    }
    board.setCellValue(row, col, letter);
    return true;
  }
}
