import Board from "../../utils/Board";

describe("Board", () => {
  describe("constructor", () => {
    /**
      * AC 1.1
      * CUANDO el jugador inicie el juego de SOS, se le debe permitir escoger el tamaño del tablero.
      * ENTONCES, el sistema debe mostrar el tablero con el tamaño seleccionado.
    */
    test("should create a board with the specified number of rows and columns", () => {
      // Definimos el número de filas y columnas para el tablero de prueba
      const rows = 4;
      const columns = 4;

      // Creamos un nuevo tablero con las filas y columnas especificadas
      const board = new Board(rows, columns);

      // Verificamos que el tablero tenga el número de filas y columnas especificado
      expect(board.getRows()).toBe(rows);
      expect(board.getColumns()).toBe(columns);

      // Verificamos que el tablero tenga el tamaño correcto
      expect(board.getBoard()).toHaveLength(rows);

      // Verificamos que cada fila del tablero tenga el tamaño correcto
      board.getBoard().forEach(row => expect(row).toHaveLength(columns));
    });
  });
});