import { Player } from "../../utils/Player";
import { Board } from "../../utils/Board";
import { Game } from "../../utils/Game";
import { GameMode } from "../../utils/GameMode";

describe("Game", () => {
  describe("setGameMode",() => {
    /**
      * AC 2.1
      * CUANDO el jugador seleccione un modo de juego,
      * ENTONCES, el sistema debe mostrar el tablero con el modo de juego seleccionado.
    */
    test("should create a board with the specified game mode", () => {
      // Definimos el modo de juego para el tablero de prueba
      const rows = 3;
      const columns = 3;
      const gameMode = GameMode.GENERAL_GAME;

      // Creamos un nuevo juego
      const game = new Game();

      // Agregamos dos jugadores al juego
      game.addPlayer(new Player("Red"));
      game.addPlayer(new Player("Blue"));

      // Definimos el tablero de juego
      game.setBoard(rows, columns);

      // Definimos el modo de juego para el tablero de juego
      game.setGameMode(gameMode);

      // Verificamos que el tablero tenga el modo de juego especificado
      expect(game.getGameMode()).toBe(gameMode);
    });
  });
});