import { Board } from "./Board";
import { GameMode } from "./GameMode";
import { Player } from "./Player";

/**
 * @class Game
 * @classdesc Clase para representar un juego de SOS.
 * @version 1.0.2
 */
export class Game {

  private players: Player[] = [];
  private gameMode: GameMode;
  private board: Board | null = null;
  private currentPlayer: Player | null = null;

  /**
   * Crea una instancia de Game.
   * @constructor
   */
  constructor () {
    this.gameMode = GameMode.SIMPLE_GAME;
  }

  /**
   * Cambia el tablero
   * @param {number} rows Número de filas
   * @param {number} columns Número de columnas
   * @returns {void}
   */
  public setBoard(rows: number, columns: number): void {
    this.board = new Board(rows, columns);
  }

  /**
   * Devuelve el modo de juego.
   * @returns {GameMode} El modo de juego.
   * @throws {Error} Si no hay modo de juego.
   */ 
  public getBoad(): Board {
    if (this.board == null) {
      throw new Error("No hay tablero.");
    }
    return this.board;
  }

  /**
   * Cambia el modo de juego.
   * @param {GameMode} gameMode El modo de juego.
   * @returns {void}
   */
  public setGameMode(gameMode: GameMode ): void {
    this.gameMode = gameMode;
  }

  /**
   * Devuelve el modo de juego.
   * @returns {GameMode} El modo de juego.
   * @throws {Error} Si no hay modo de juego.
   */
  public getGameMode(): GameMode {
    if (this.gameMode == null) {
      throw new Error("No hay modo de juego.");
    }
    return this.gameMode;
  } 

  /**
   * Agrega un jugador al juego.
   * @param {Player} player El jugador a agregar.
   * @returns {void}
   * @throws {Error} Si el jugador ya está en el juego.
   * @throws {Error} Si el juego ya tiene dos jugadores.
   */
  public addPlayer(player: Player): void {
    if (this.players.includes(player)) {
      throw new Error("El jugador ya está en el juego.");
    }
    if (this.players.length >= 2) {
      throw new Error("El juego ya tiene dos jugadores.");
    }
    this.players.push(player);
  }
  
  /**
   * Devuelve los jugadores del juego.
   * @returns {Player[]} Los jugadores del juego.
   * @throws {Error} Si no hay jugadores.
  */
  public getPlayers(): Player[] {
    if (this.players.length == 0) {
      throw new Error("No hay jugadores.");
    }
    return this.players;
  }

  /**
   * Devuelve el jugador actual.
   * @returns {Player} El jugador actual.
   * @throws {Error} Si no hay jugador actual.
   */
  public getCurrentPlayer(): Player {
    if (this.currentPlayer == null) {
      throw new Error("No hay jugador actual.");
    }
    return this.currentPlayer;
  }

  /**
   * Cambia de turno al jugador actual.
   * @returns {void}
   */
  public setCurrentPlayer(player: Player): void {
    this.currentPlayer = player;
  }

}