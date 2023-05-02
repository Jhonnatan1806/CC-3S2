/**
 * @class Score
 * @classdesc Esta clase se encarga de manejar el puntaje del juego.
 * @version 1.0.2
 */
export class Score {
  
  private score: number;

  constructor() {
    this.score = 0;
  }

  public addScore(points: number): void {
    if (points < 0) {
      throw new Error('Points cannot be negative.');
    }
    if (typeof points !== 'number') {
      throw new Error('Points must be a number.');
    }
    if (!Number.isInteger(points)) {
      throw new Error('Points must be an integer.');
    }
    this.score += points;
  }

  public getScore(): number {
    return this.score;
  }

}