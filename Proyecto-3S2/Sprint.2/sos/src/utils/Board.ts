/**
 * Representa un tablero de juego.
 * @author Jhonnnatan && Omar
 */
export default class Board {

  private rows: number;
  private columns: number;
  private board: string[][];
  private gameMode: boolean;

  /**
   * Crea un nuevo tablero con el número de filas y columnas especificado.
   * 
   * @param rows El número de filas del tablero.
   * @param columns El número de columnas del tablero.
   */
  constructor(rows: number, columns: number) {
    this.rows = rows;
    this.columns = columns;
    this.board = [];
    this.gameMode = true;

    for (let i = 0; i < rows; i++) {
      const fila = new Array(columns).fill("");
      this.board.push(fila);
    }
  }

  /**
   * Devuelve una copia del tablero.
   * 
   * @returns Una matriz bidimensional que representa el estado actual del tablero.
   */
  public getBoard(): string[][] {
    return this.board;
  }

  /**
   * Devuelve el número de filas del tablero.
   * 
   * @returns El número de filas del tablero.
   */
  public getRows(): number {
    return this.rows;
  }

  /**
   * Devuelve el número de columnas del tablero.
   * 
   * @returns El número de columnas del tablero.
   */
  public getColumns(): number {
    return this.columns;
  }

  /**
   * Devuelve el modo de juego del tablero.
   * 
   * @returns El modo de juego del tablero que por defecto es "simple".
   * true = "simple" & false = "general"
   */
  public getGameMode(): boolean {
    return this.gameMode;
  }
  /**
   * Coloca una letra en la posición especificada del tablero.
   * 
   * @param row La fila en la que se colocará la letra.
   * @param column La columna en la que se colocará la letra.
   * @param letter La letra que se colocará en la posición especificada.
   * @returns true si la letra se colocó exitosamente en la posición especificada, o false si la posición ya estaba ocupada.
   */
  public putLetter(row: number, column: number, letter: string): boolean {
    if (this.board[row][column] !== "") {
      return false;
    }
    this.board[row][column] = letter;
    return true;
  }

}