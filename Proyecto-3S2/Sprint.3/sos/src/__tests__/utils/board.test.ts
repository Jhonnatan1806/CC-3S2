import { Board } from "../../utils/Board";
import { Mode } from "../../utils/Mode";

describe("Board", () => {
  describe("constructor", () => {
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
  });
});