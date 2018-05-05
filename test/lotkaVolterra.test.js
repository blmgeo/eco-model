const EcoModel = require('../dist/EcoModel').default;

// Lotka-Volterra Test Cases
const model = new EcoModel.LotkaVolterra(1,1,1,1,1,1);

test('should return the correct populations at time=1', () => {
  const result = model.populationAt(1);
  const expected = {
    prey: 1,
    predator: 1,
  };
  
  expect(result).toEqual(expected);
});

test('should return the correct populations up to time=1', () => {
  const result = model.populationOver(1);
  const expected = [{
    prey: 1,
    predator: 1,
  }, {
    prey: 1,
    predator: 1,
  }];
  
  expect(result).toEqual(expected);
});