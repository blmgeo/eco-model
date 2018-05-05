const assert = require('chai').assert;
const EcoModel = require('../EcoModel').default;

// Sigmoid Test Cases
describe('Sigmoid module', () => {
  const model = new EcoModel.Sigmoid;

  describe('#gompertz(1,1,1,1)', () => {
    it('should return the correct value', () => {
      const result = model.gompertz(1, 1, 1, 1).toFixed(5);
      const expected = 0.6922006275553462.toFixed(5);
      assert.equal(expected, result);
    });
  });
});