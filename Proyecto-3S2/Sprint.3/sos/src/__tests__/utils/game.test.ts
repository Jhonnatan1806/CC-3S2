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

  describe("getWinner", () => {
    /**
     * AC 5.1
     * CUANDO un jugador completa la palabra SOS horizontalmente, verticalmente o diagonalmente, se le debe mostrar un mensaje indicando que ha ganado la partida
     * ENTONCES, el juego debe terminar y mostrar el mensaje de victoria al jugador que ganó.
     */
    test("should end the game and show a victory message to the winning player", () => {

      // creamos un tablero de 3x3
      let board: Board  = new Board();

      // creamos dos jugadores
      let players: Player[] = [
        new Player("Red", board),
        new Player("Blue", board)
      ];

      // creamos un tablero de 3x3
      let game: Game = new Game(board, players);
      
      /*
       * Tablero de ejemplo:
       * | S | O | S |
       * | O |   |   |
       * |   |   |   |
       */ 

      // realizamos un movimiento con el jugador 1
      game.getCurrentPlayer().makeMove(0, 0, "S");

      // cambiamos de jugador 2
      game.setCurrentPlayer(game.getPlayers()[1]);

      // realizamos otro movimiento con el jugador 2
      game.getCurrentPlayer().makeMove(0, 1, "O");

      // cambiamos de jugador 1
      game.setCurrentPlayer(game.getPlayers()[0]);

      // realizamos otro movimiento con el jugador 1
      game.getCurrentPlayer().makeMove(1, 0, "O");

      // cambiamos de jugador 2
      game.setCurrentPlayer(game.getPlayers()[1]);

      // realizamos otro movimiento con el jugador 2
      game.getCurrentPlayer().makeMove(0, 2, "S");

      // verificamos al ganador
      expect(game.getWinner().getName()).toBe("Blue");
    });

  });

  });
});