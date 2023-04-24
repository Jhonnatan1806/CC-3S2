/**
 * @class Score
 * @classdesc Esta clase se encarga de manejar el puntaje del juego.
 * @version 1.0.0
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