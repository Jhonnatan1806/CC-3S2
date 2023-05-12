import { Board } from "../utils/Board";
import { Game } from "../utils/Game";
import { Player } from "../utils/Player";
import { Mode } from "../utils/Mode";
import { Letter } from "@/utils/Letter";

describe("Player", () => {
  let game: Game;
  let board: Board;
  let players: Player[];
  let rows: number = 3;
  let columns: number = 3;
  let mode: Mode = Mode.GENERAL_GAME;

  beforeEach(() => {
    board = new Board(rows, columns);
    players = [new Player("Red"), new Player("Blue")];
    game = new Game(board, players, mode);
  });

  describe("makeMove", () => {
    
    test("should start a simple SOS game with an empty board and player 1's turn", () => {
      // Verificamos que el tablero esté vacío
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
          expect(game.getBoard().getCell(i, j)).toBe("");
        }
      }

      // Verificamos que sea el turno del jugador 1
      expect(game.getCurrentPlayer()).toBe(game.getPlayers()[0]);
    });

    /**
     * AC 4.2
     * CUANDO el jugador seleccione una celda vacía
     * ENTONCES, el sistema debe colocar la letra S o O en la celda seleccionada.
     */
    test("should place an S or O in the selected cell", () => {

      // Seleccionamos una celda vacía
      game.makeMove(0, 0, Letter.S );

      // Verificamos que la celda seleccionada tenga una S o una O
      expect(game.getBoard().getCell(0, 0)).toMatch(/S|O/);
    });

    /**
     * AC 4.3
     * CUANDO el jugador seleccione una celda que ya está ocupada
     * ENTONCES, el sistema debe mostrar un mensaje de error indicando que la celda ya está ocupada
     */
    test("should place an S or O in the selected cell", () => {

      // Seleccionamos una celda vacía
      game.makeMove(0, 0, Letter.S );

      // El sistema nos arroja un error
      expect(() => {
        game.makeMove(0, 0, Letter.O);
      }).toThrow("Cell is not empty");

      // Verificamos que la celda seleccionada tenga la primera letra que se colocó
      expect(game.getBoard().getCell(0, 0)).toMatch(/S/);
    });
  });
});
