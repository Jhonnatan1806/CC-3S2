import { Board } from "../utils/Board";
import { Game } from "../utils/Game";
import { Player } from "../utils/Player";
import { Mode } from "../utils/Mode";
import { Letter } from "../utils/Letter";

describe("Game", () => {

  let game: Game;
  let board: Board;
  let players: Player[];
  let rows: number = 3;
  let columns: number = 3;
  let mode: Mode = Mode.SIMPLE_GAME;

  beforeEach(() => {
    board = new Board(rows,columns);
    players = [
      new Player("Red"),
      new Player("Blue")
    ];
    game = new Game(board, players, mode);
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
      expect(game.getMode()).toBe(mode);
    });

  describe("getWinner", () => {
    /**
     * AC 5.1
     * CUANDO un jugador completa la palabra SOS horizontalmente, verticalmente o diagonalmente, se le debe mostrar un mensaje indicando que ha ganado la partida
     * ENTONCES, el juego debe terminar y mostrar el mensaje de victoria al jugador que ganó.
     */
    test("should end the game and show a victory message to the winning player", () => {

      // realizamos un movimiento con el jugador 1
      game.makeMove(0, 0, Letter.S);

      // realizamos otro movimiento con el jugador 2
      game.makeMove(0, 1, Letter.O);

      // realizamos otro movimiento con el jugador 1
      game.makeMove(1, 0, Letter.O);

      // realizamos otro movimiento con el jugador 2
      game.makeMove(0, 2, Letter.S);

      // verificamos al ganador
      expect(game.getWinner().getName()).toBe("Blue");
    });

    /**
     * AC 5.2
     * CUANDO el tablero se llena completamente sin que ningún jugador haya completado la palabra SOS, se le debe mostrar un mensaje indicando que la partida ha terminado en empate
     * ENTONCES, el juego debe terminar y mostrar el mensaje de empate.
     */
    test("should end the game and show a draw message", () => {

      // realizamos un movimiento con el jugador 1
      game.makeMove(0, 0, Letter.S);

      // realizamos otro movimiento con el jugador 2
      game.makeMove(0, 1, Letter.O);

      // realizamos otro movimiento con el jugador 1
      game.makeMove(0, 2, Letter.O);

      // realizamos otro movimiento con el jugador 2
      game.makeMove(1, 0, Letter.S);

      // realizamos otro movimiento con el jugador 1
      game.makeMove(1, 1, Letter.O);

      // realizamos otro movimiento con el jugador 2
      game.makeMove(1, 2, Letter.O);
      
      // realizamos otro movimiento con el jugador 1
      game.makeMove(2, 0, Letter.S);

      // realizamos otro movimiento con el jugador 2
      game.makeMove(2, 1, Letter.O);

      // realizamos otro movimiento con el jugador 1
      game.makeMove(2, 2, Letter.O);

      // verificamos que no haya ganador
      expect(() => {game.getWinner()}).toThrow("Draw.");

    });

  });

  });
});