import { Player } from "../../utils/Player";
import { Board } from "../../utils/Board";

describe("Player", () => {
  describe("selectGameSettings", () => {
    /**
     * AC 3.1
     * CUANDO el jugador seleccione un tamaño de tablero y un modo de juego,
     * ENTONCES, el sistema debe mostrar el tablero con el tamaño y modo de juego seleccionado.
     */
    test("should create a board with the specified size and game mode", () => {
      // Creamos un nuevo jugador
      const player = new Player("Red");

      // Definimos el tamaño de tablero y el modo de juego para el jugador
      const rows = 3;
      const columns = 3;
      const gameMode = false; // false == modo de juego general
      player.setGameSettings(rows, columns, gameMode);

      // Obtenemos el tablero del jugador
      const board: Board = player.getBoard();

      // Verificamos que el tablero tenga el tamaño y modo de juego especificados
      expect(board.getRows()).toBe(rows);
      expect(board.getColumns()).toBe(columns);
      expect(board.getGameMode()).toBe(gameMode);
    });
  });
});