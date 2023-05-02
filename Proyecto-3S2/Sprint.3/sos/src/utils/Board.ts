import { Mode } from "./Mode";

/**
 * @class Board
 * @classdesc Representa un tablero de juego.
 * @version 1.0.5
 */
export class Board {
  
  private readonly rows: number;
  private readonly columns: number;
  private readonly grid: string[][];
  
  private mode: Mode;

  constructor(rows: number, columns: number) {
    this.rows = rows;
    this.columns = columns;
    this.mode = Mode.SIMPLE_GAME;
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

  public setMode(mode: Mode): void {
    this.mode = mode;
  }

  public getMode(): Mode {
    return this.mode;
  }

  public setCell(row: number, column: number, value: string): void {
    if (row < 0 || row >= this.rows || column < 0 || column >= this.columns) {
      throw new Error("Cell position out of bounds.");
    }
    this.grid[row][column] = value;
  }

  public getCell(row: number, column: number): string {
    if (row < 0 || row >= this.rows || column < 0 || column >= this.columns) {
      throw new Error("Cell position out of bounds.");
    }
    return this.grid[row][column];
  }

  public checkSOS(row: number, column: number, value: string): boolean {
    if (this.mode === Mode.GENERAL_GAME) {
      return this.checkSOSAdvanced(row, column, value);
    }
    return this.checkSOSClassic(row, column, value);;
  }

  public checkSOSClassic(row: number, column: number, value: string): boolean {
    //Verificar si se forma un SOS horizontal row = 1
    let isSOS: boolean = false;
    for (let i = 0; i < this.columns; i++) {
      let letterRow: string = `${this.grid[i][0]}${this.grid[i][1]}${this.grid[i][2]}`;
      if (letterRow === "SOS") {
        isSOS = true;
      }
    }
    return isSOS;
  }

  public checkSOSAdvanced(row: number, column: number, value: string): boolean {
    return false;
  }
}
