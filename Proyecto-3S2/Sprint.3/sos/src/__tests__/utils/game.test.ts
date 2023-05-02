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

  describe("setGameMode",() => {
    /**
     * AC 2.1
     * CUANDO el jugador seleccione un modo de juego,
     * ENTONCES, el sistema debe mostrar el tablero con el modo de juego seleccionado.
     */
    test("should create a board with the specified game mode", () => {
      
      // Verificamos que el tablero tenga el numero de filas especificado
      expect(game.getBoard().getRows()).toBe(rows);

      // Verificamos que el tablero tenga el numero de columnas especificado
      expect(game.getBoard().getColumns()).toBe(columns);

      // Verificamos que el tablero tenga el modo de juego especificado
      expect(game.getBoard().getMode()).toBe(mode);
    });
  });
});