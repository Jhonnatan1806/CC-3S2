import { Mode } from "./Mode";
import { Letter } from "./Letter";

/**
 * @class Board
 * @classdesc Representa un tablero de juego.
 */
export class Board {
  private readonly rows: number;
  private readonly columns: number;
  private readonly grid: string[][];

  constructor(rows: number = 3, columns: number = 3) {
    this.rows = rows;
    this.columns = columns;
    this.grid = new Array(this.rows);
    this.grid = new Array(rows)
      .fill(null)
      .map(() => new Array(columns).fill(""));
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

  public setCell(row: number, column: number, value: Letter): void {
    this.grid[row][column] = value;
  }

  public getCell(row: number, column: number): string {
    return this.grid[row][column];
  }

  public checkSOS(mode: Mode): number {
    if (mode === Mode.GENERAL_GAME) {
      return this.checkGeneral();
    }
    return this.checkSimple();
  }

  public checkSimple(): number {
    const rows: string[] = this.grid.map((row) => row.join(""));
    const columns: string[] = this.grid.reduce(
      (acc: string[], row: string[], i: number) => {
        row.forEach((_, j) => {
          acc[j] += this.grid[i][j];
        });
        return acc;
      },
      Array.from({ length: this.columns }, () => "")
    );
    const diagonals: string[] = [
      `${this.grid[0][0]}${this.grid[1][1]}${this.grid[2][2]}`,
      `${this.grid[0][2]}${this.grid[1][1]}${this.grid[2][0]}`,
    ];
    const allStrings: string[] = [...rows, ...columns, ...diagonals];
    return allStrings.filter((str) => str === "SOS").length > 0 ? 1 : 0;
  }

  public checkGeneral(): number {
    return 0;
  }
}
