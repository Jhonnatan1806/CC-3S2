import { Mode } from "fs";
import { Board } from "./Board";
import { Player } from "./Player";

/**
 * @class Game
 * @classdesc Clase para representar un juego de SOS.
 * @version 1.0.3
 */
export class Game {

  private board: Board;
  private players: Player[];
  private currentPlayer: Player;
  private isGameOver: boolean;

  constructor( board: Board, players: Player[]) {
    this.players = players;
    this.board = board;
    this.currentPlayer = players[0];
    this.isGameOver = false;
  }

  public getBoard(): Board {
    if (this.board == null) {
      throw new Error("No board");
    }
    return this.board;
  }

  public getPlayers(): Player[] {
    if (this.players.length == 0) {
      throw new Error("No players");
    }
    return this.players;
  }

  public getMode(): Mode {
    if (this.board == null) {
      throw new Error("No board");
    }
    return this.board.getMode();
  }

  public getSize(): {rows: number, columns: number} {
    if (this.board == null) {
      throw new Error("No board");
    }
    return { rows: this.board.getRows(), 
      columns: this.board.getColumns()};
  }

  public setCurrentPlayer(player: Player): void {
    this.currentPlayer = player;
  }

  public getCurrentPlayer(): Player {
    if (this.currentPlayer == null) {
      throw new Error("No current player found");
    }
    return this.currentPlayer;
  }

  public makeMove(row: number, column: number, letter: string): void {
    this.currentPlayer.makeMove( row, column, letter);
    if( this.currentPlayer === this.players[0]){
      this.currentPlayer = this.players[1];
    }else{
      this.currentPlayer = this.players[0];
    }
    if (this.board.checkSOS() === 0) {
      this.isGameOver = true;
    }
  }

  public getWinner(): Player {
    if (this.players[0].getScore() === this.players[1].getScore()) {
      throw new Error("Draw");
    }
    if (this.players[0].getScore() > this.players[1].getScore()) {
      return this.players[0];
    }
    return this.players[1];
  }

  public getGameOver(): boolean {
    return this.isGameOver;
  }

}
