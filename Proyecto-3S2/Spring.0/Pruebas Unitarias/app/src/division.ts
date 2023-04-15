// division.ts

/**
 * Función que realiza la division de dos números.
 * @param a Dividendo.
 * @param b Divisor.
 * @returns Resultado de la division.
 */
export function division(a: number, b: number): number {
    if (b === 0) {
        throw new Error("No se puede dividir entre cero");
      }
      return a / b;
  }