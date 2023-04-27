# Sprint 2

## Resumen del código fuente

| Nombre del archivo o código fuente | ¿Código de producción o de prueba? | # Lineas de código |
|---|---|---|
| Board.ts | ![Board](Imagenes/Board.png) | 24 |
| GameMode.ts | ![GameMode](Imagenes/GameMode.png) | 16 |
| Player.ts | ![Player](Imagenes/Player.png) | 15 |

## Código de producción vs Historias de Usuario/Criterio de Aceptación

| Nombre e ID de historia de usuario | AC ID | Nombre Clase(s) | Nombre Método(s) | Estatus (completo o no) | Notas (opcional) |
|---|---|---|---|---|---|
| 1. Escoge el tamaño del tablero | 1.1 | Board | getBoard getRows getColumns | completo | - |
| 2. Escoge el modo de juego de un tablero escogido | 2.1 | GameMode| getGameMode setGameMode | completo | - |
| 3. Comienza un nuevo juego del tamaño de tablero y del modo de juego elegidos  | 3.1 | Player GameMode Board Score |   | incompleto | - |
| 4. Hacer un movimiento en un juego simple | 4.1 | Player Board | putLetter | completo | - |
| 5. Un juego simple a terminado | 5.1 | Player Score | checkResult getScore | incompleto | - |

## Pruebas vs Historias de Usuario/Criterio de Aceptación

**1. Pruebas automatizadas que corresponden directamente a los criterios de aceptación**

| Nombre e ID de historia de usuario | AC ID | Nombre Clase(s) del código de prueba | Nombre Método(s) del código de prueba | Descripción de los casos de prueba (entrada & salida esperada) |
|---|---|---|---|---|
| 1. Escoge el tamaño del tablero | 1.1 | Board | expect(board.getRows()).toBe(rows) expect(board.getColumns()).toBe(columns)| completo | - |
| 2. Escoge el modo de juego de un tablero escogido | 2.1 | GameMode| expect(board.getGameMode()).toBe(gameMode); | completo | - |
| 3. Comienza un nuevo juego del tamaño de tablero y del modo de juego elegidos  | 3.1 | Player GameMode Board Score |   | incompleto | - |
| 4. Hacer un movimiento en un juego simple | 4.1 | Player Board | expect(boardState).toBe([1][1])  | completo | - |
| 5. Un juego simple a terminado | 5.1 | Player Score | expect(gameState).toBe(finished) | incompleto | - |

**2. Pruebas manuales que corresponden directamente a los criterios de aceptación**

| Nombre e ID de historia de usuario | AC ID | Entrada de caso de prueba | Salida esperada | Notas |
|---|---|---|---|---|
| 1. Escoge el tamaño del tablero | 1.1 | ![BoardSize](Imagenes/boardSize.png) | | | 
| 2. Escoge el modo de juego de un tablero escogido | 2.1 | ![GameMode](Imagenes/gameMode.png) | | | 
| 3. Comienza un nuevo juego del tamaño de tablero y del modo de juego elegidos  | 3.1 | ![BaordAndGameMode](Imagenes/boardsize&gameode.png) | | | 
| 4. Hacer un movimiento en un juego simple | 4.1 | ![MakeAmove](Imagenes/makeAmove.png) | | | 
| 5. Un juego simple a terminado | 5.1 | ![Finished](Imagenes/gameFinished.png) | | | 

**3. Otras pruebas automatizadas o manuales que no corresponden a los criterios de aceptación de las historias de usuario anteriores**

| Número | Entrada prueba | Resultado Esperado | Nombre de clase del código de prueba | Nombre del método del código de prueba |
|---|---|---|---|---|
| 1 | | | | | 
| 2 | | | | | 
| 3 | | | | | 
| 4 | | | | | 
| 5 | | | | | 
