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

  constructor(rows: number, columns: number) {
    this.rows = rows;
    this.columns = columns;
    this.grid = new Array(rows);
    for (let i = 0; i < rows; i++) {
      this.grid[i] = new Array(columns).fill("");
    }
  }

  public getGrid(): string[][] {
    return this.grid;
  }

  public getRows(): number {
    return this.rows;
  }

  public getColumns(): number {
    return this.columns;
  }

  public getCellValue(row: number, column: number): string {
    if (row < 0 || row >= this.rows || column < 0 || column >= this.columns) {
      throw new Error("Cell position out of bounds.");
    }
    return this.grid[row][column];
  }

  public setCellValue(row: number, column: number, value: string): void {
    if (row < 0 || row >= this.rows || column < 0 || column >= this.columns) {
      throw new Error("Cell position out of bounds.");
    }
    if (this.grid[row][column] !== "") {
      throw new Error("Cell already occupied.");
    }
    this.grid[row][column] = value;
  }

  public getEmptyCells(): number {
    let emptyCells: number = 0;
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        if (this.grid[i][j] === "") {
          emptyCells++;
        }
      }
    }
    return emptyCells;
  }

  public checkSOS(row: number, column: number, value: string): boolean {
    if (row < 0 || row >= this.rows || column < 0 || column >= this.columns) {
      throw new Error("Cell position out of bounds.");
    }
    if (this.grid[row][column] !== "") {
      throw new Error("Cell already occupied.");
    }
    let sos: boolean = false;
    if (this.gameMode) {
      sos = this.checkSOSClassic(row, column, value);
    } else {
      sos = this.checkSOSAdvanced(row, column, value);
    }
    return sos;
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
    //sos = [false, false, false] -> sos = [S, O, S]
    let sos: boolean[] = [false, false, false];
    return false;
  }
}
