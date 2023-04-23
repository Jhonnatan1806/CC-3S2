import { Board } from './Board';

/**
 * Representa un jugador del juego SOS.
 * @author Jhonnatan && Omar
 */
export class Player {

  private readonly name: string;
  private board: Board | undefined;

  /**
   * Crea un nuevo jugador con el nombre especificado.
   * 
   * @param name El nombre del jugador.
   */
  constructor (name: string) {
    this.name = name;
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
   * Devuelve el tablero del jugador.
   * 
   * @returns El tablero del jugador.
   * @throws Error si el tablero no ha sido inicializado.
   * @see Player.setGameSettings
   * @see Board
   */
  public getBoard(): Board {
    if(!this.board) throw new Error("The game has not started yet.");
    return this.board;
  }

  /**
   * Selecciona el tamaño y el modo de juego del tablero.
   * 
   * @param rows El número de filas del tablero.
   * @param columns El número de columnas del tablero.
   * @param gameMode El modo de juego del tablero.
   * @returns El modo de juego del tablero.
   * @see Board.setGameMode
   */
  public setGameSettings(rows: number, columns:number , gameMode: boolean): void {
    if(this.board) throw new Error("The game has already started.");
    this.board = new Board(rows, columns);
    this.board.setGameMode(gameMode);
  }

}