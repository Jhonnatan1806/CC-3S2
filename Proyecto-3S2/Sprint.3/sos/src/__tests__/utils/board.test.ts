import { Board } from "../../utils/Board";
import { Mode } from "../../utils/Mode";

describe("Board", () => {
  describe("board size", () => {
    /**
     * AC 1.1
     * CUANDO el jugador inicie el juego de SOS, se le debe permitir escoger el tamaño del tablero.
     * ENTONCES, el sistema debe mostrar el tablero con el tamaño seleccionado.
     */
    test("should create a board with the specified number of rows and columns", () => {
      // Definimos el número de filas y columnas para el tablero de prueba
      const rows = 3;
      const columns = 3;

      // Creamos un nuevo tablero con las filas y columnas especificadas
      const board = new Board(rows, columns, Mode.SIMPLE_GAME);

      // Verificamos que el tablero tenga el número de filas y columnas especificado
      expect(board.getRows()).toBe(rows);
      expect(board.getColumns()).toBe(columns);

      // Verificamos que el tablero tenga el tamaño correcto
      expect(board.getGrid()).toHaveLength(rows);

      // Verificamos que cada fila del tablero tenga el tamaño correcto
      board.getGrid().forEach(row => expect(row).toHaveLength(columns));
    });

    /**
     * AC 1.2
     * CUANDO el usuario no selecciona un tamaño de tablero, se debe utilizar el tamaño 3x3 de manera predeterminada.
     * ENTONCES, si el usuario inicia una partida sin haber seleccionado un tamaño de tablero, el juego debe iniciarse en el tablero 3x3.
     */
    test("should create a board with the default number of rows and columns", () => {
      // Definimos el modo de juego para el tablero de prueba
      const rows = 3;
      const columns = 3;
      const mode = Mode.GENERAL_GAME;

      // Creamos un nuevo tablero sin especificar el número de filas y columnas
      const board = new Board(undefined, undefined, mode);

      // Verificamos que el tablero tenga el número de filas y columnas predeterminado
      expect(board.getRows()).toBe(rows);
      expect(board.getColumns()).toBe(columns);

      // Verificamos que el tablero tenga el tamaño correcto
      expect(board.getGrid()).toHaveLength(rows);

      // Verificamos que cada fila del tablero tenga el tamaño correcto
      board.getGrid().forEach(row => expect(row).toHaveLength(columns));
    });

  });

  describe("board mode", () => {
    /**
     * AC 2.1
     * CUANDO el jugador seleccione un modo de juego,
     * ENTONCES, el sistema debe mostrar el tablero con el modo de juego seleccionado.
     */
    test("should create a board with the specified game mode", () => {
      // Definimos el modo de juego para el tablero de prueba
      const rows = 3;
      const columns = 3;
      const mode = Mode.GENERAL_GAME;

      // Creamos un nuevo tablero con las filas y columnas especificadas con un modo de juego
      const board = new Board(rows, columns, mode);

      // Verificamos que el tablero tenga el modo de juego especificado
      expect(board.getMode()).toBe(mode);
    });

    /**
     * AC 2.2 
     * CUANDO el usuario no selecciona un modo de juego, se debe utilizar el modo simple de manera predeterminada.
     * ENTONCES, si el usuario inicia una partida sin haber seleccionado un modo de juego, el juego debe iniciarse en el tablero seleccionado con el modo simple.
     */
    test("should create a board with the default game mode", () => {
      // Definimos el modo de juego para el tablero de prueba
      const rows = 3;
      const columns = 3;
      const mode = Mode.SIMPLE_GAME;

      // Creamos un nuevo tablero con las filas y columnas especificadas sin un modo de juego
      const board = new Board(rows, columns, undefined);

      // Verificamos que el tablero tenga el modo de juego predeterminado
      expect(board.getMode()).toBe(mode);
    });
  });
});