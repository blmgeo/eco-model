const assert = require('chai').assert;
const EcoModel = require('../EcoModel').default;

// Sigmoid Test Cases
const model = new EcoModel.Sigmoid;

test('should return the correct value', () => {
  const result = model.gompertz(1, 1, 1, 1).toFixed(5);
  const expected = 0.6922006275553462.toFixed(5);
  expect(result).toBe(expected);
});