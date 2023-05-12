import { Board } from "@/utils/Board";
import { Game } from "@/utils/Game";
import { IA } from "@/utils/IA";
import { Letter } from "@/utils/Letter";
import { Mode } from "@/utils/Mode";
import { Player } from "@/utils/Player";

describe('ia', () => {

  describe('getRandomCell', () => {
    test('should return a random cell', () => {
      const board = new Board();
      const players = [
        new Player("Human"),
        new IA("Computer", 4)
      ];
      const game = new Game( board, players, Mode.SIMPLE_GAME );
      const human = game.getPlayers()[0];
      const ia = game.getPlayers()[1] as IA;
      game.makeMove( 0, 1, Letter.O );
      game.makeMove( 1, 0, Letter.O );
      const res = ia.minimax( board, true, -Infinity, Infinity, 0 );
      expect( res ).toEqual( [10, 10] );
    });
  });
});