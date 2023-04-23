import { Board } from './Board';

/**
 * Representa un jugador del juego SOS.
 * @author Jhonnnatan && Omar
 */
export class Player {

  private readonly name: string;
  private readonly board: Board;

  /**
   * Crea un nuevo jugador con el nombre especificado.
   * 
   * @param name El nombre del jugador.
   * @param board El tablero del juego.
   */
  constructor (name: string, board: Board) {
    this.name = name;
    this.board = board;
  }

  /**
   * Devuelve el nombre del jugador.
   * 
   * @returns El nombre del jugador.
   */
  public getName(): string {
    return this.name;
  }

  /**
   * Selecciona el modo de juego del tablero.
   * 
   * @param mode El modo de juego del tablero.
   * @returns El modo de juego del tablero.
   * @see Board.setGameMode
   */
  public selectGameMode(mode: boolean): boolean {
    this.board.setGameMode(mode);
    return this.board.getGameMode();
  }

}