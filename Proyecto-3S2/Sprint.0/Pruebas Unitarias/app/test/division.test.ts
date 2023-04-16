import { division } from '../src/division';

test('Prueba de division', () => {
  expect(division(6, 3)).toBe(2); // Se espera que la division de 6 y 3 sea igual a 2
  expect(division(0, 2)).toBe(0); // Se espera que la division de 0 y 2 sea igual a 0
  expect(() => division(0, 0)).toThrow("No se puede dividir entre cero"); // Se espera que la division sea indefinida
});