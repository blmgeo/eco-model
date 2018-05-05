const assert = require('chai').assert;
const EcoModel = require('../EcoModel').default;

// Diversity Test Cases
describe('Diversity module', () => {
  const model = EcoModel.Diversity([1, 2, 3, 4, 5]);

  describe('#bergerParker(species)', () => {
    it('should return the correct Berger-Parker index', () => {
      const expected = (1 / 3).toFixed(5);
      const result = model.bergerParker().toFixed(5);
      assert.equal(expected, result);
    });
  });

  describe('#brillouin(species)', () => {
    it('should return the correct Brillouin index', () => {
      const expected = 1.16325;
      const result = model.brillouin().toFixed(5);
      assert.equal(expected, result);
    });
  });

  describe('#margalef(species)', () => {
    it('should return the correct Margalef index', () => {
      const expected = 1.47708;
      const result = model.margalef().toFixed(5);
      assert.equal(expected, result);
    });
  });

  describe('#menhinick(species)', () => {
    it('should return the correct Menhinick index', () => {
      const expected = 1.29099;
      const result = model.menhinick().toFixed(5);
      assert.equal(expected, result);
    });
  });

  describe('#richness(species)', () => {
    it('should return the number of species types', () => {
      const expected = 5;
      const result = model.richness().toFixed(5);
      assert.equal(expected, result);
    });
  });

  describe('#shannon(species)', () => {
    it('should return the correct Shannon index', () => {
      const expected = 1.48975;
      result = model.shannon().toFixed(5);
      assert.equal(expected, result);
    });
  });

  describe('#simpson(species)', () => {
    it('should return the correct Simpson index', () => {
      const expected = 0.24444;
      const result = model.simpson().toFixed(5);
      assert.equal(expected, result);
    });
  });

  describe('#simpsonDiversity(species)', () => {
    it('should return the correct Simpson Diversity index', () => {
      const expected = (1 - 0.2444444444444).toFixed(5);
      const result = model.simpsonDiversity().toFixed(5);
      assert.equal(expected, result);
    });
  });

  describe('#simpsonDominance(species)', () => {
    it('should return the correct Simpson Dominance index', () => {
      const expected = (1 / 0.2444444444444).toFixed(5);
      const result = model.simpsonDominance().toFixed(5);
      assert.equal(expected, result);
    });
  });
});