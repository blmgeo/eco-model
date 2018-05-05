const EcoModel = require('../dist/EcoModel').default;

// NonSteadyState Test Cases
  const model = new EcoModel.NonSteadyState(1,1,1);

test('should return the correct stock at time=1', () => {
  const result = model.stockAt(1);
  expect(result).toBe(3);
});

test('should return the correct flow at time=1', () => {
  const result = model.flowAt(1);
  expect(result).toBe(2);
});