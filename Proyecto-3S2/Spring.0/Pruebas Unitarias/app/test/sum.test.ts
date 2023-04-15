import { sum } from '../src/sum';

test('Prueba de suma', () => {
  expect(sum(2, 3)).toBe(5); // Se espera que la suma de 2 y 3 sea igual a 5
  expect(sum(-1, 5)).toBe(4); // Se espera que la suma de -1 y 5 sea igual a 4
  expect(sum(0, 0)).toBe(0); // Se espera que la suma de 0 y 0 sea igual a 0
});