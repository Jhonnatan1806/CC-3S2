import { Mode } from "./Mode";

/**
 * @class Board
 * @classdesc Representa un tablero de juego.
 * @version 1.0.5
 */
export class Board {
  
  private readonly rows: number ;
  private readonly columns: number ;
  private readonly grid: string[][];
  private readonly mode: Mode;

  constructor(rows: number, columns: number, mode: Mode) {
    this.rows = rows;
    this.columns = columns;
    this.mode = mode;
    this.grid = new Array(rows);
    for (let i = 0; i < rows; i++) {
      this.grid[i] = new Array(columns).fill("");
    }
  }

  public getRows(): number {
    return this.rows;
  }

  public getColumns(): number {
    return this.columns;
  }

  public getGrid(): string[][] {
    return this.grid;
  }

  public getMode(): Mode {
    return this.mode;
  }

  public setCell(row: number, column: number, value: string): void {
    this.grid[row][column] = value;
  }

  public getCell(row: number, column: number): string {
    return this.grid[row][column];
  }

  public checkSOS(): number {
    if (this.mode === Mode.GENERAL_GAME) {
      return this.checkGeneral();
    }
    return this.checkSimple();
  }

  public checkSimple(): number {
    // Verificar si se forma SOS en la fila
    for (let i = 0; i < this.columns; i++) {
      let letterRow: string = `${this.grid[i][0]}${this.grid[i][1]}${this.grid[i][2]}`;
      if (letterRow === "SOS") {
        return 1;
      }
    }
    // Verificar si se forma SOS en la columna
    for (let i = 0; i < this.rows; i++) {
      let letterColumn: string = `${this.grid[0][i]}${this.grid[1][i]}${this.grid[2][i]}`;
      if (letterColumn === "SOS") {
        return 1;
      }
    }
    // Verificar si se forma SOS en la diagonal principal
    let letterDiagonal: string = `${this.grid[0][0]}${this.grid[1][1]}${this.grid[2][2]}`;
    if (letterDiagonal === "SOS") {
      return 1;
    }
    // Verificar si se forma SOS en la diagonal secundaria
    letterDiagonal = `${this.grid[0][2]}${this.grid[1][1]}${this.grid[2][0]}`;
    if (letterDiagonal === "SOS") {
      return 1;
    }
    return 0;
  }

  public checkGeneral(): number {
    return 0;
  }
}
