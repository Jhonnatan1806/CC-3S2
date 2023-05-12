import { Board } from "@/utils/Board";
import { IA } from "@/utils/IA";
import { Player } from "@/utils/Player";

describe('ia', () => {

  describe('getRandomCell', () => {
    test('should return a random cell', () => {
      const board = new Board();
      const players = [
        new Player("Human"),
        new IA("Computer", 3)
      ];
    });
  });
});