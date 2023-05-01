/**
 * @class Score
 * @classdesc Esta clase se encarga de manejar el puntaje del juego.
 * @version 1.0.1
 */
export class Score {
  
  private score: number;

  /**
   * Crea un objeto Score con un puntaje inicial de 0.
   * @constructor
   */
  constructor() {
    this.score = 0;
  }

  /**
   * Cambia el puntaje actual.
   * @param {number} points El nuevo puntaje.
   * @returns {void}
   */
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

  /**
   * Devuelve el puntaje actual.
   * @returns {number} El puntaje actual.
   */
  public getScore(): number {
    return this.score;
  }

  /**
   * Actualiza el puntaje con el resultado del último movimiento.
   * @param {string} result El resultado del último movimiento.
   * @throws {Error} Si el resultado no es válido.
   */
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