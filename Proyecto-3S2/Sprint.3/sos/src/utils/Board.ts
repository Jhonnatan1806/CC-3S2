/**
 * @class Board
 * @classdesc Representa un tablero de juego.
 * @version 1.0.4
 */
export class Board {

  private readonly rows: number;
  private readonly columns: number;
  private readonly grid: string[][];
  
  private gameMode: boolean = true;

  /**
   * Crea un nuevo tablero con el número de filas y columnas especificado.
   * @constructor
   * @param {number} rows El número de filas del tablero.
   * @param {number} columns El número de columnas del tablero.
   */
  constructor(rows: number, columns: number) {
    this.rows = rows;
    this.columns = columns;
    this.grid = new Array(rows);
    for(let i = 0; i < rows; i++) {
      this.grid[i] = new Array(columns).fill("");
    }
  }

  /**
   * Devuelve una copia del tablero.
   * @returns {string[][]} Una matriz bidimensional que representa el estado actual del tablero.
   */
  public getGrid(): string[][] {
    return this.grid;
  }

  /**
   * Devuelve el número de filas del tablero.
   * @returns {number} El número de filas del tablero.
   */
  public getRows(): number {
    return this.rows;
  }

  /**
   * Devuelve el número de columnas del tablero.
   * @returns {number} El número de columnas del tablero.
   */
  public getColumns(): number {
    return this.columns;
  }

  /**
   * Devuelve la letra en la celda especificada.
   * @param {number} row La fila de la celda.
   * @param {number} column La columna de la celda.
   * @returns {string} La letra en la celda especificada, o una cadena vacía si la celda está vacía.
   * @throws {Error} Error si la fila o columna especificada está fuera del rango del tablero.
   */
    public getCellValue(row: number, column: number): string {
      if(row < 0 || row >= this.rows || column < 0 || column >= this.columns) {
        throw new Error("Cell position out of bounds.");
      }
      return this.grid[row][column];
    }

  /**
   * Establece la letra en la celda especificada.
   * @param {number} row La fila de la celda.
   * @param {number} column La columna de la celda.
   * @param {string} value La letra a establecer en la celda.
   * @throws {Error} Error si la fila o columna especificada está fuera del rango del tablero, o si la celda ya está ocupada.
   */
  public setCellValue(row: number, column: number, value: string): void {
    if(row < 0 || row >= this.rows || column < 0 || column >= this.columns) {
      throw new Error("Cell position out of bounds.");
    }
    if(this.grid[row][column] !== "") {
      throw new Error("Cell already occupied.");
    }
    this.grid[row][column] = value;
  }

}