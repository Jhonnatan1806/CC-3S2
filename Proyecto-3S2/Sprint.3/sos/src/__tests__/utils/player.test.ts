import { Player } from "../../utils/Player";
import { Game } from "../../utils/Game";
import { GameMode } from "../../utils/GameMode";

describe("Player", () => {

  let game: Game;
  let player1: Player;
  let player2: Player;
  const rows = 3;
  const columns = 3;
  const gameMode = GameMode.GENERAL_GAME;

  beforeEach(() => {
    game = new Game();
    player1 = new Player("Red");
    player2 = new Player("Blue");
    game.addPlayer(player1);
    game.addPlayer(player2);
    game.setBoard(rows, columns);
    game.setGameMode(gameMode);
  });

  describe("selectGameSettings", () => {
    /**
     * AC 3.1
     * CUANDO el jugador seleccione un tamaño de tablero y un modo de juego,
     * ENTONCES, el sistema debe mostrar el tablero con el tamaño y modo de juego seleccionado.
     */
    test("should create a board with the specified size and game mode", () => {
      // Verificamos que el tablero tenga el tamaño y modo de juego especificados
      expect(game.getBoard().getRows()).toBe(rows);
      expect(game.getBoard().getColumns()).toBe(columns);
      expect(game.getGameMode()).toBe(gameMode);
    });
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
          expect(game.getBoard().getCellValue(i, j)).toBe("");
        }
      }

      // Asignamos el turno al jugador 1
      game.setCurrentPlayer(player1);

      // Verificamos que sea el turno del jugador 1
      expect(game.getCurrentPlayer()).toBe(player1);

      // El jugador hace su movimiento en una celda vacía
      let moveResult = player1.makeMove(game.getBoard(), 0, 0, "S");
      expect(moveResult).toBe(true);
      expect(game.getBoard().getCellValue(0,0)).toBe("S");
      // Se cambia de turno
      game.setCurrentPlayer(player2);

      // Verificamos que ahora sea el turno del jugador 2
      expect(game.getCurrentPlayer()).toBe(player2);
    });

  });
});