const EcoModel = require('../dist/EcoModel').default;

// SteadyState Test Cases
  const model = new EcoModel.SteadyState(1,1,1);

test('should return the correct residence time', () => {
  const result = model.residence();
  const expected = 1;
  expect(result).toBe(expected);
});

test('should return the correct flow rate', () => {
  const result = model.flow();
  const expected = 1;
  expect(result).toBe(expected);
});

test('should return the correct stock', () => {
  const result = model.stock();
  const expected = 1;
  expect(result).toBe(expected);
});