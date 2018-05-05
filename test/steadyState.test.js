const assert = require('chai').assert;
const EcoModel = require('../EcoModel').default;

// SteadyState Test Cases
describe('SteadyState module', () => {
  const model = new EcoModel.SteadyState(1,1,1);

  describe('#residence()', () => {
    it('should return the correct residence time', () => {
      const result = model.residence();
      const expected = 1;
      assert.equal(expected, result);
    });
  });

  describe('#flow()', () => {
    it('should return the correct flow rate', () => {
      const result = model.flow();
      const expected = 1;
      assert.equal(expected, result);
    });
  });

  describe('#stock()', () => {
    it('should return the correct stock', () => {
      const result = model.stock();
      const expected = 1;
      assert.equal(expected, result);
    });
  });
});