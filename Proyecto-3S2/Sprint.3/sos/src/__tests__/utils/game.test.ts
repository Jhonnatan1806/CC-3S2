import { Board } from "../../utils/Board";
import { Game } from "../../utils/Game";
import { Player } from "../../utils/Player";
import { Mode } from "../../utils/Mode";

describe("Game", () => {

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

  describe("constructor", () => {
    /**
     * AC 3.1
     * CUANDO el jugador seleccione un tamaño de tablero y un modo de juego,
     * ENTONCES, el sistema debe mostrar el tablero con el tamaño y modo de juego seleccionado.
     */
    test("should create a board with the specified size and game mode", () => {
      // Verificamos que el tablero tenga el tamaño y modo de juego especificados
      expect(game.getBoard().getRows()).toBe(rows);
      expect(game.getBoard().getColumns()).toBe(columns);
      expect(board.getMode()).toBe(mode);


    });
  });
});