const fibonacci = require('./math');
const resta = require('./math');

test('Resta de 10 - 5 debe ser 5', ()=>{
    expect(resta(10,5)).toBe(2);
});

test('El fibonacci de 4 deberia ser 3', () => {
  expect(fibonacci(4)).toBe(1);
});
