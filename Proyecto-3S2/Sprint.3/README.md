# Sprint 3

## Resumen

En este sprint se implementó los criterios de aceptacion AC 5.1, AC 5.2 AC 6.1, AC 6.2, AC 7.1 y AC 7.2. Ademas se refactorizo el codigo para que sea mas legible y se agregaron comentarios para que sea mas facil de entender.

## Refactorización

Se creo la clase enum GameMode, la cual contiene los modos de juego que puede tener ademas esta funcionalidad la sacamos del Board y la asignamos directamente a la clase Game. De este modo es mas legible y entendible el codigo.

```typescript 
export enum GameMode {
  SIMPLE_GAME ,
  GENERAL_GAME ,
}
```

Se crearon getters y setters para los atributos de la clase Game, de este modo se puede acceder a los atributos de la clase Game desde otras clases.

```typescript
public setGameMode(gameMode: GameMode): void {
    this.gameMode = gameMode;
}

public getGameMode(): GameMode {
  return this.gameMode;
}

public setBoard(board: Board): void {
  this.board = board;
}

public getBoard(): Board {
  return this.board;
}
```

Luego modificamos los tests para que se adapten a los cambios realizados, finalmente verificamos que pasa todos los test antes de hacer el commit.



