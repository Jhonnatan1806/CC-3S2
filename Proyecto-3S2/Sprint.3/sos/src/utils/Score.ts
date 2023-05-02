/**
 * @class Score
 * @classdesc Esta clase se encarga de manejar el puntaje del juego.
 * @version 1.0.1
 */
export class Score {
  
  private score: number;

  constructor() {
    this.score = 0;
  }

  public setScore(points: number): void {
    if (points < 0) {
      throw new Error('Points cannot be negative.');
    }
    if (typeof points !== 'number') {
      throw new Error('Points must be a number.');
    }
    if (!Number.isInteger(points)) {
      throw new Error('Points must be an integer.');
    }
    if (points === 0) {
      throw new Error('Points cannot be zero.');
    }
    this.score = points;
  }

  public getScore(): number {
    return this.score;
  }

  public updateScore(result: string): void {
    if (result !== 'S' && result !== 'O' && result !== 'SS' && result !== 'OO') {
      throw new Error('Invalid result provided.');
    }
    if (result === 'S' || result === 'O') {
      this.score++;
    } else if (result === 'SS' || result === 'OO') {
      this.score += 2;
    }
  }

}