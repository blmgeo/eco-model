const EcoModel = require('../EcoModel').default;

// Diversity Test Cases
const model = EcoModel.Diversity([1, 2, 3, 4, 5]);

test('Berger-Parker index', () => {
  const expected = +(1 / 3).toFixed(5);
  const result = +model.bergerParker().toFixed(5);
  expect(result).toBe(expected);
});


test('Brillouin index', () => {
  const expected = 1.16325;
  const result = +model.brillouin().toFixed(5);
  expect(result).toBe(expected);
});


test('Margalef index', () => {
  const expected = 1.47708;
  const result = +model.margalef().toFixed(5);
  expect(result).toBe(expected);
});


test('Menhinick index', () => {
  const expected = 1.29099;
  const result = +model.menhinick().toFixed(5);
  expect(result).toBe(expected);
});


test('Species richness', () => {
  const expected = 5;
  const result = +model.richness().toFixed(5);
  expect(result).toBe(expected);
});


test('Shannon index', () => {
  const expected = 1.48975;
  result = +model.shannon().toFixed(5);
  expect(result).toBe(expected);
});


test('Simpson index', () => {
  const expected = 0.24444;
  const result = +model.simpson().toFixed(5);
  expect(result).toBe(expected);
});


test('Simpson Diversity index', () => {
  const expected = +(1 - 0.2444444444444).toFixed(5);
  const result = +model.simpsonDiversity().toFixed(5);
  expect(result).toBe(expected);
});


test('Simpson Dominance index', () => {
  const expected = +(1 / 0.2444444444444).toFixed(5);
  const result = +model.simpsonDominance().toFixed(5);
  expect(result).toBe(expected);
});