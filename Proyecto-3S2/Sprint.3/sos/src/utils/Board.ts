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

  /**
   * Devuelve el número de celdas vacías en el tablero.
   * @returns {number} El número de celdas vacías en el tablero.
   */
  public getEmptyCells(): number {
    let emptyCells: number = 0;
    for(let i = 0; i < this.rows; i++) {
      for(let j = 0; j < this.columns; j++) {
        if(this.grid[i][j] === "") {
          emptyCells++;
        }
      }
    }
    return emptyCells;
  }

  /**
   * Revise si se ha formado una cadena SOS en el tablero.
   * @param {number} row La fila de la celda.
   * @param {number} column La columna de la celda.
   * @param {string} value La letra a establecer en la celda.
   * @returns {boolean}
   */
  public checkSOS(row: number, column: number, value: string): boolean {
    if(row < 0 || row >= this.rows || column < 0 || column >= this.columns) {
      throw new Error("Cell position out of bounds.");
    }
    if(this.grid[row][column] !== "") {
      throw new Error("Cell already occupied.");
    }
    let sos: boolean = false;
    if(this.gameMode) {
      sos = this.checkSOSClassic(row, column, value);
    } else {
      sos = this.checkSOSAdvanced(row, column, value);
    }
    return sos;
  }

  public checkSOSClassic (row: number, column: number, value: string): boolean {
    //Verificar si se forma un SOS horizontal row = 1
    let isSOS: boolean = false;
    for( let i = 0; i < this.columns; i++) {
      let letterRow: string = `${this.grid[i][0]}${this.grid[i][1]}${this.grid[i][2]}`;
      if(letterRow === "SOS") {
        isSOS = true;
      }
    }
    return isSOS;
  }

  public checkSOSAdvanced (row: number, column: number, value: string): boolean {
    //sos = [false, false, false] -> sos = [S, O, S]
    let sos: boolean[] = [false, false, false];
    return false;
  }
  
}