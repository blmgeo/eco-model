const assert = require('chai').assert;
const EcoModel = require('../EcoModel').default;

// NonSteadyState Test Cases
describe('NonSteadyState module', () => {
  const model = new EcoModel.NonSteadyState(1,1,1);

  describe('#stockAt(1)', () => {
    it('should return the correct stock at time=1', () => {
      const result = model.stockAt(1);
      assert.equal(3, result);
    });
  });

  describe('#flowAt(1)', () => {
    it('should return the correct flow at time=1', () => {
      const result = model.flowAt(1);
      assert.equal(2, result);
    });
  });
});