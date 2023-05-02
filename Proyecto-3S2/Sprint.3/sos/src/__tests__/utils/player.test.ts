import { Board } from "../../utils/Board";
import { Game } from "../../utils/Game";
import { Player } from "../../utils/Player";
import { Mode } from "../../utils/Mode";

describe("Player", () => {

  let game: Game;
  let board: Board;
  let players: Player[];
  let rows: number = 3;
  let columns: number = 3;
  let mode: Mode = Mode.GENERAL_GAME;

  beforeEach(() => {
    board = new Board(rows,columns,mode);
    players = [
      new Player("Red", board),
      new Player("Blue", board)
    ];
    game = new Game(board, players);
  });

  describe("makeMove", () => {
    /**
     * AC 4.1
     * CUANDO el jugador inicie un juego simple de SOS, se le debe mostrar un tablero vacío
     * y debe ser el turno del jugador 1 para hacer un movimiento.
     * ENTONCES, el jugador debe ser capaz de seleccionar una celda vacía en el tablero para colocar su letra S o O.
     */
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
  });

});