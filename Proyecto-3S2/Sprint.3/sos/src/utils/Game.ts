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
  public getBoard(): Board {
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

  public makeMove(row: number, column: number, letter: string): void {
    if (this.board == null) {
      throw new Error("No hay tablero.");
    }
    if (this.currentPlayer == null) {
      throw new Error("No hay jugador actual.");
    }
    this.currentPlayer.makeMove(this.board, row, column, letter);
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

  /** 
   * Devuelve el jugador ganador.
   * @returns {Player} El jugador ganador.
   * @throws {Error} Si no hay ganador.
   * @throws {Error} Si hay empate.
   * @throws {Error} Si el juego no ha terminado.
   * @throws {Error} Si el juego no tiene jugadores.
   * @throws {Error} Si el juego no tiene tablero.
   * @throws {Error} Si el juego no tiene modo de juego.
   */
  public getWinner(): Player {
    if(this.players.length == 0) {
      throw new Error("No hay jugadores.");
    }
    if(this.board == null) {
      throw new Error("No hay tablero.");
    }
    if(this.gameMode == null) {
      throw new Error("No hay modo de juego.");
    }
    if(this.board.getEmptyCells() != 0) {
      throw new Error("El juego no ha terminado.");
    }
    let player1Score = this.players[0].getScore();
    let player2Score = this.players[1].getScore();
    if(player1Score == player2Score) {
      throw new Error("Hay empate.");
    }
    if(player1Score > player2Score) {
      return this.players[0];
    }
    return this.players[1];
  }

}