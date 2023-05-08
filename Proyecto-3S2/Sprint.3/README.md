# Sprint 3

## Resumen del código fuente

| Nombre del archivo o código fuente | ¿Código de producción o de prueba? | # Lineas de código |
|---|---|---|
| Board.ts | Producción | 88 |
| Game.ts | Producción | 75 |
| Mode.ts | Producción | 20 |
| Player.ts | Producción | 45 |
| Score.ts | Producción | 32 |
| board.test.ts | Prueba | 94 |
| game.test.ts | Prueba | 103 |
| player.test.ts | Prueba | 77 |

## Código de producción vs Historias de Usuario/Criterio de Aceptación

| Nombre e ID de historia de usuario | AC ID | Nombre Clase(s) | Nombre Método(s) | Estatus (completo o no) | Notas (opcional) |
|---|---|---|---|---|---|
| 1. Escoge el tamaño del tablero | AC 1.1 | Board | Board(n,m) getRows() getColumns() | Completado | Crea un objeto Board con n filas y m columnas.  |
| | AC 1.2 | Board | Board() getRows() getColumns() | Completado | Crea un objeto Board con 3 filas y 3 columnas por defecto. |
| 2. Escoge el modo de juego de un tablero escogido | AC 2.1 | Board, Mode | Board(mode) getMode() | Completado | Crea un objeto Board con el modo de juego especificado |
| | AC 2.2 | Board, Mode | Board() getMode() | Completado | Crea un objeto Board con el modo de juego simple por defecto. |
| 3. Comienza un nuevo juego del tamaño de tablero y del modo de juego elegidos | AC 3.1 | Board Game Player | Game(board, players[]) getSize() getMode() | Completado | Crea un nuevo objeto Game con un objeto Board y una lista de objetos Player. La lista de jugadores debe tener al menos dos elementos. La función getSize() devuelve un objeto con las propiedades rows y columns, correspondientes al tamaño del tablero. La función getMode() devuelve el modo de juego actual del objeto Board |
| 4. Hacer un movimiento en un juego simple | AC 4.1 | Board Game Player Mode | Game(board, players[]) setCurrentPlayer(player) | Completado | Establece al jugador actual en el objeto Game. Esta función se usa para cambiar el turno de los jugadores. |
|  | AC 4.2 | Board Game Player Mode | Player(name) makeMove(x,y,str) | Completado | Crea un nuevo objeto Player con el nombre especificado. La función makeMove(x, y, str) permite al jugador hacer un movimiento en las coordenadas (x, y) con el símbolo especificado en str. |
|  | AC 4.3 | Board Game Player Mode | Player(name) makeMove(x,y,str) getCell(x,y) | Completado | No permite hacer un movimiento si es que ya existe una letra en la celda. |
| 5. Un juego simple a terminado | AC 5.1 y 5.2 | Board Game Player Mode Score | Game(board, players[]) getWinner() checkSOS() getScore() | Completado | Determina el ganador del juego actual. La función checkSOS() comprueba si se ha formado una cadena "SOS" en el tablero, y la función getScore() devuelve la puntuación actual de cada jugador. |


## Pruebas vs Historias de Usuario/Criterio de Aceptación

**1. Pruebas automatizadas que corresponden directamente a los criterios de aceptación**

| Nombre e ID de historia de usuario | AC ID | Nombre Clase(s) del código de prueba | Nombre Método(s) del código de prueba | Descripción de los casos de prueba (entrada & salida esperada) |
|---|---|---|---|---|
| 1. Escoge el tamaño del tablero | | | | | 
| 2. Escoge el modo de juego de un tablero escogido | | | | | 
| 3. Comienza un nuevo juego del tamaño de tablero y del modo de juego elegidos  | | | | | 
| 4. Hacer un movimiento en un juego simple | | | | | 
| 5. Un juego simple a terminado | | | | | 

**2. Pruebas manuales que corresponden directamente a los criterios de aceptación**

| Nombre e ID de historia de usuario | AC ID | Entrada de caso de prueba | Salida esperada | Notas |
|---|---|---|---|---|
| 1. Escoge el tamaño del tablero | | | | | 
| 2. Escoge el modo de juego de un tablero escogido | | | | | 
| 3. Comienza un nuevo juego del tamaño de tablero y del modo de juego elegidos  | | | | | 
| 4. Hacer un movimiento en un juego simple | | | | | 
| 5. Un juego simple a terminado | | | | | 

**3. Otras pruebas automatizadas o manuales que no corresponden a los criterios de aceptación de las historias de usuario anteriores**

| Número | Entrada prueba | Resultado Esperado | Nombre de clase del código de prueba | Nombre del método del código de prueba |
|---|---|---|---|---|
| 1 | | | | | 
| 2 | | | | | 
| 3 | | | | | 
| 4 | | | | | 
| 5 | | | | | 

## Describe cómo la jerarquía de clases en tu diseño trata con los requisitos comunes y diferentes del juego simple y el juego general. 

Nuestras clases son: 
Board, Game, Mode, Player, Score

### Clase principal: Game
Tomamos la clase game como principal, esta clase se encarga de recibir de paramatro el tablero y los jugadores en su constructor, además de tener los métodos que se encargan de hacer el juego, como por ejemplo:

- setCurrentPlayer(player): Este método se encarga de cambiar el jugador actual, recibe como parámetro el jugador que va a ser el actual.

- getWinner(): Este método se encarga de retornar el ganador del juego, si no hay ganador retorna un error Draw.

### Clase Board

Esta clase se encarga de crear el tablero, se encarga de asignar el número de filas y columnas, ademas recibe como parámetro el modo de juego, el cual puede ser simple o general.

Esta clase contiene métodos como:

- getRows(): Este método se encarga de retornar el número de filas del tablero.

- getColumns(): Este método se encarga de retornar el número de columnas del tablero.

- getMode(): Este método se encarga de retornar el modo de juego del tablero.

- getCell(x,y): Este método se encarga de retornar la celda del tablero en la posición x,y.

- setCell(x,y,cell): Este método se encarga de asignar la celda del tablero en la posición x,y.

- checkSOS(): Este método se encarga de verificar si se ha formado un SOS en el tablero, retorna true si se ha formado un SOS, de lo contrario retorna false.

### Clase Player

Esta clase se encarga de crear los jugadores, recibe como parámetro el nombre del jugador.

Esta clase contiene métodos como:

- getName(): Este método se encarga de retornar el nombre del jugador.

- makeMove(x,y,str): Este método se encarga de hacer el movimiento del jugador, recibe como parámetro la posición x,y y la letra que va a colocar en la posición.


### Clase Score

Esta clase se encarga de llevar el puntaje de los jugadores.

Esta clase contiene métodos como:

- getScore(): Este método se encarga de retornar el puntaje del jugador.

- addScore(score): Este método se encarga de asignar el puntaje del jugador.

### Clase enum Mode

Esta clase enum se encarga de definir los modos de juego, los cuales son simple y general.
