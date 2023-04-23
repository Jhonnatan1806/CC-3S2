# Sprint 1

**Historias de Usuarios**

| ID | Nombre de la historia de usuario | Descripción de la historia de usuario | Prioridad | Esfuerzo estimado (horas) |
|---|---|---|---|---|
| 1 | Escoge el tamaño del tablero | **Como** jugador **quiero** escoger el tamaño del tablero antes de comenzar a jugar. Esto me permite personalizar la experiencia de juego **para** poder jugar según mis preferencias. | Media (3) | 3 |
| 2 | Elige el modo de juego de un tablero elegido | **Como** jugador **quiero** seleccionar el modo de juego antes de comenzar a jugar. Esta función me permitirá  **personalizar** aún más mi experiencia de juego según mis habilidades, ya que diferentes modos de juego pueden tener diferentes reglas, objetivos y niveles de dificultad. | Media-Alta (2) | 6 |
| 3 | Comienza un nuevo juego del tamaño de tablero y del modo de juego elegidos  | **Como** jugador **necesito** iniciar un nuevo juego con las opciones de tamaño de tablero y modo de juego previamente seleccionadas. **Para** así comenzar a jugar con las opciones de juego que ha elegido previamente, sin tener que volver a configurar el tamaño y modo de juego cada vez que quiera iniciar denuevo. | Alta (1) | 4 |
| 4 | Hacer un movimiento en un juego simple | **Como** jugador **requiero** hacer un movimiento en el juego después de que el tablero y el modo de juego hayan sido configurados. Esta función me permitiría **hacer** una jugada en el tablero y actualizar el estado del juego en consecuencia. | Alta (1) | 3 |
| 5 | Un juego simple  a terminado | **Como** jugador **quiero** que el sistema detecte el final del juego y muestre el resultado final **para** saber si he ganado o perdido. Además, **quiero** poder reiniciar el juego o salir del mismo **para** poder jugar de nuevo o salir del juego. | Alta (1) | 4 |
| 6 | Hacer un movimiento en un juego general | **Como** jugador del juego SOS, **quiero** poder hacer un movimiento en cualquier momento durante el juego **para** poder avanzar en el mismo y ganar. También **quiero** poder seleccionar la posición donde quiero hacer el movimiento y que el sistema lo valide y lo muestre en el tablero.    | Alta (1) | 4 |
| 7 | Un juego general a terminado | **Como** jugador del juego SOS, **quiero** que se identifique el momento en el que el juego termina y muestre si gané o perdí, asi como también el modo de juego **para** salir del juego o empezar un nuevo ya sea general o simple. | Baja (4) | 5 |

**Tabla de prioridades**

A continuación se muestra una tabla con las prioridades de las historias de usuario.

| Prioridad | Descripción |
|---|---|
| 1 | Alta |
| 2 | Media-Alta |
| 3 | Media |
| 4 | Baja |


**Criterios de Aceptación (AC)**

| Nombre e ID de la historia de usuario| AC ID | Descripción de los criterios de aceptación | Estatus |
|---|---|---|---|
| 1. Escoge el tamaño del tablero | AC 1.1 | **CUANDO** el jugador inicie el juego de `SOS`, se le debe permitir escoger el tamaño del tablero. **ENTONCES**, se debe mostrar una lista de opciones con diferentes tamaños de tablero. | Pendiente | 
| | AC 1.2 | **CUANDO** el jugador seleccione un tamaño de tablero, **ENTONCES**, el sistema debe mostrar el tablero con el tamaño seleccionado. | Pendiente | 
| | AC 1.3 | **CUANDO** el usuario no selecciona un tamaño de tablero, se debe utilizar el tamaño `3x3` de manera predeterminada. **ENTONCES**, si el usuario inicia una partida sin haber seleccionado un tamaño de tablero, el juego debe iniciarse en el tablero `3x3`. | Pendiente |
| 2. Elige el modo de juego de un tablero elegido | AC 2.1 | **CUANDO** el jugador seleccione un modo de juego, **ENTONCES**, el sistema debe mostrar el tablero con el modo de juego seleccionado. | Pendiente |
| | AC 2.2 | **CUANDO** el usuario no selecciona un modo de juego, se debe utilizar el modo `simple` de manera predeterminada. **ENTONCES**, si el usuario inicia una partida sin haber seleccionado un modo de juego, el juego debe iniciarse en el tablero seleccionado con el modo `simple`. | Pendiente |
| 3. Comienza un nuevo juego del tamaño de tablero y del modo de juego elegidos | AC 3.1 | **CUANDO** el jugador seleccione un tamaño de tablero y un modo de juego, **ENTONCES**, el sistema debe mostrar el tablero con el tamaño y modo de juego seleccionado. | Pendiente | 
| 4. Hacer un movimiento en un juego simple | AC 4.1 | **CUANDO** el jugador inicie un juego simple de SOS, se le debe mostrar un tablero vacío y debe ser el turno del jugador 1 para hacer un movimiento. **ENTONCES**, el jugador debe ser capaz de seleccionar una celda vacía en el tablero para colocar su letra `S` o `O`. | Pendiente |
| | AC 4.2 | **CUANDO** el jugador seleccione una celda vacía, **ENTONCES**, el sistema debe colocar la letra `S` o `O` en la celda seleccionada. | Pendiente |
| | AC 4.3 | **CUANDO** el jugador seleccione una celda que ya está ocupada, **ENTONCES**, el sistema debe mostrar un mensaje de error indicando que la celda ya está ocupada. | Pendiente |
| 5. Un juego simple  a terminado | AC 5.1 | **CUANDO** un jugador completa la palabra `SOS` horizontalmente, verticalmente o diagonalmente, se le debe mostrar un mensaje indicando que ha ganado la partida. **ENTONCES**, el juego debe terminar y mostrar el mensaje de victoria al jugador que ganó. | Pendiente |
| | AC 5.2 | **CUANDO** el tablero se llena completamente sin que ningún jugador haya completado la palabra `SOS`, se le debe mostrar un mensaje indicando que la partida ha terminado en empate. **ENTONCES**, el juego debe terminar y mostrar el mensaje de empate. | Pendiente |
| 6. Hacer un movimiento en un juego general | AC 6.1 | **CUANDO** el jugador inicie un juego general de SOS, se le debe mostrar un tablero vacío y debe ser el turno del jugador 1 para hacer un movimiento. **ENTONCES**, el jugador debe ser capaz de seleccionar una celda vacía en el tablero para colocar su letra `S` o `O`. | Pendiente |
| | AC 6.2 | **CUANDO** el jugador seleccione una celda vacía, **ENTONCES**, el sistema debe colocar la letra `S` o `O` en la celda seleccionada. | Pendiente |
| | AC 6.3 | **CUANDO** el jugador seleccione una celda que ya está ocupada, **ENTONCES**, el sistema debe mostrar un mensaje de error indicando que la celda ya está ocupada. | Pendiente |
| 7. Un juego general a terminado | AC 7.1 | **CUANDO** se hayan completado todas las celdas del tablero con letras `S` o `O`, o cuando no haya más celdas disponibles para colocar letras. **ENTONCES**, el juego debe mostrar un mensaje que indique que el juego ha terminado y debe mostrar el puntaje de cada jugador, es decir, la cantidad de palabras `SOS` completadas por cada jugador. | Pendiente |

**Estados de AC**

- Pendiente: El criterio aún no ha sido revisado o aprobado.
- Aprobado: El criterio ha sido revisado y aprobado.
- Rechazado: El criterio ha sido revisado y rechazado.
- En progreso: El criterio está siendo implementado.
- Completado: El criterio ha sido implementado.
- Pendiente de revisión: El criterio ha sido implementado y está pendiente de revisión.


