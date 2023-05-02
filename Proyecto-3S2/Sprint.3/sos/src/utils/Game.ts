import { Board } from "./Board";
import { GameMode } from "./GameMode";
import { Player } from "./Player";

/**
 * @class Game
 * @classdesc Clase para representar un juego de SOS.
 * @version 1.0.2
 */
export class Game {

  private board: Board;
  private players: Player[];
  private currentPlayer: Player;
  private gameWon: boolean;

  constructor( board: Board, players: Player[]) {
    this.players = players;
    this.board = board;
    this.currentPlayer = players[0];
    this.gameWon = false;
  }

  public getBoard(): Board {
    if (this.board == null) {
      throw new Error("No hay tablero.");
    }
    return this.board;
  }

  public getPlayers(): Player[] {
    if (this.players.length == 0) {
      throw new Error("No hay jugadores.");
    }
    return this.players;
  }

  public setCurrentPlayer(player: Player): void {
    this.currentPlayer = player;
  }

  public getCurrentPlayer(): Player {
    if (this.currentPlayer == null) {
      throw new Error("No hay jugador actual.");
    }
    return this.currentPlayer;
  }

  public playMove(row: number, column: number, letter: string): void {
    this.currentPlayer.makeMove(this.board, row, column, letter);
  }

  public getWinner(): Player {
    if (this.players[0].getScore() === this.players[1].getScore()) {
      throw new Error("Hay empate.");
    }
    if (this.players[0].getScore() > this.players[1].getScore()) {
      return this.players[0];
    }
    return this.players[1];
  }

  public isGameWon(): boolean {
    return this.gameWon;
  }
}
