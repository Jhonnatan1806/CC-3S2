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

  constructor() {
    this.gameMode = GameMode.SIMPLE_GAME;
  }

  public setBoard(rows: number, columns: number): void {
    this.board = new Board(rows, columns);
  }

  public getBoard(): Board {
    if (this.board == null) {
      throw new Error("No hay tablero.");
    }
    return this.board;
  }

  public setGameMode(gameMode: GameMode): void {
    this.gameMode = gameMode;
  }

  public getGameMode(): GameMode {
    if (this.gameMode == null) {
      throw new Error("No hay modo de juego.");
    }
    return this.gameMode;
  }

  public addPlayer(player: Player): void {
    if (this.players.includes(player)) {
      throw new Error("El jugador ya está en el juego.");
    }
    if (this.players.length >= 2) {
      throw new Error("El juego ya tiene dos jugadores.");
    }
    this.players.push(player);
  }

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

  public getCurrentPlayer(): Player {
    if (this.currentPlayer == null) {
      throw new Error("No hay jugador actual.");
    }
    return this.currentPlayer;
  }

  public setCurrentPlayer(player: Player): void {
    this.currentPlayer = player;
  }

  public getWinner(): Player {
    if (this.players.length == 0) {
      throw new Error("No hay jugadores.");
    }
    if (this.board == null) {
      throw new Error("No hay tablero.");
    }
    if (this.gameMode == null) {
      throw new Error("No hay modo de juego.");
    }
    if (this.board.getEmptyCells() != 0) {
      throw new Error("El juego no ha terminado.");
    }
    let player1Score = this.players[0].getScore();
    let player2Score = this.players[1].getScore();
    if (player1Score == player2Score) {
      throw new Error("Hay empate.");
    }
    if (player1Score > player2Score) {
      return this.players[0];
    }
    return this.players[1];
  }
}
