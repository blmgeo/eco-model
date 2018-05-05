const assert = require('chai').assert;
const EcoModel = require('../EcoModel').default;

// Lotka-Volterra Test Cases
describe('Lotka-Volterra module', () => {
  const model = new EcoModel.LotkaVolterra(1,1,1,1,1,1);

  describe('#popAt(1)', () => {
    it('should return the correct populations at time=1', () => {
      const result = model.populationAt(1);
      const expected = {
        prey: 1,
        predator: 1,
      };
      assert.deepEqual(expected, result);
    });
  });

  describe('#popOver(1)', () => {
    it('should return the correct populations up to time=1', () => {
      const result = model.populationOver(1);
      const expected = [{
        prey: 1,
        predator: 1,
      }, {
        prey: 1,
        predator: 1,
      }];
      assert.deepEqual(expected, result);
    });
  });
});