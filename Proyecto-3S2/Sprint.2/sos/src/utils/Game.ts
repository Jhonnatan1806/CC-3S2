import { Board } from "./Board";
import { Player } from "./Player";

/**
 * @class Game
 * @classdesc Clase para representar un juego de SOS.
 * @version 1.0.0
 */
export class Game {

  private readonly player1: Player;
  private readonly player2: Player;
  private readonly board: Board;

  private currentPlayer: Player;

  /**
   * Crea una instancia de Game.
   * @constructor
   * @param {string} player1 El nombre del jugador 1.
   * @param {string} player2 El nombre del jugador 2.
   * @param {number} rows El número de filas del tablero.
   * @param {number} columns El número de columnas del tablero.
   * @param {boolean} gameMode El modo de juego. `true` para el modo de juego por tiempo, `false` para el modo de juego general.
   */
  constructor(player1: Player, player2: Player, rows: number, columns: number, gameMode: boolean) {
    this.player1 = player1;
    this.player2 = player2;
    this.board = new Board(rows, columns, gameMode);
    this.currentPlayer = this.player1;
  }

  /**
   * Devuelve el tablero del juego.
   * @returns {Board} El tablero del juego.
   */
  public getBoard(): Board {
    return this.board;
  }

  public getPlayers(): Player[] {
    return [this.player1, this.player2];
  }

  /**
   * Devuelve el jugador actual.
   * @returns {Player} El jugador actual.
   */
  public getCurrentPlayer(): Player {
    return this.currentPlayer;
  }

  /**
   * Cambia de turno al jugador actual.
   */
  public setCurrentPlayer(player: Player): void {
    this.currentPlayer = player;
  }

}