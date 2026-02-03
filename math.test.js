const fibonacci = require('./math');

test('El fibonacci de 4 deberia ser 3', () => {
  expect(fibonacci(4)).toBe(3);
});
