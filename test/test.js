const assert = require('chai').assert;
const EcoModel = require('../src/EcoModel');

// Diversity Test Cases
describe('Diversity module', () => {
  const model = new EcoModel.Diversity([1, 2, 3, 4, 5]);
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

// Lotka-Volterra Test Cases
describe('Lotka-Volterra module', () => {
  const model = new EcoModel.LotkaVolterra({
    birth: 1,
    death: 1,
    prey: 1,
    predator: 1,
    assimilation: 1,
    predation: 1,
  });

  describe('#popAt(1)', () => {
    it('should return the correct populations at time=1', () => {
      const result = model.popAt(1);
      const expected = {
        time: 1,
        prey: 1,
        predator: 1,
      };
      assert.deepEqual(expected, result);
    });
  });

  describe('#popOver(1)', () => {
    it('should return the correct populations up to time=1', () => {
      const result = model.popOver(1);
      const expected = [{
        time: 0,
        prey: 1,
        predator: 1,
      }, {
        time: 1,
        prey: 1,
        predator: 1,
      }];
      assert.deepEqual(expected, result);
    });
  });
});

// NonSteadyState Test Cases
describe('NonSteadyState module', () => {
  const model = new EcoModel.NonSteadyState({
    flow: 1,
    stock: 1,
    deltaFlow: 1,
  });

  describe('#stockAt(1)', () => {
    it('should return the correct stock at time=1', () => {
      const result = model.stockAt(1);
      const expected = 3;
      assert.equal(expected, result);
    });
  });

  describe('#flowAt(1)', () => {
    it('should return the correct flow at time=1', () => {
      const result = model.flowAt(1);
      const expected = 2;
      assert.equal(expected, result);
    });
  });

  describe('#update(props)', () => {
    it('should return an updated model', () => {
      const result = model.update({
        flow: 2,
        stock: 2,
        deltaFlow: 2,
      });
      const expected = {
        flow: 2,
        stock: 2,
        deltaFlow: 2,
      };
      assert.deepEqual(expected, result);
    });
  });
});

// SteadyState Test Cases
describe('SteadyState module', () => {
  const model = new EcoModel.SteadyState({
    flow: 1,
    stock: 1,
    residence: 1,
  });

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

// Sigmoid Test Cases
describe('Sigmoid module', () => {
  describe('#gompertz(1,1,1,1)', () => {
    it('should return the correct value', () => {
      const result = EcoModel.Sigmoid.gompertz(1, 1, 1, 1).toFixed(5);
      const expected = 0.6922006275553462.toFixed(5);
      assert.equal(expected, result);
    });
  });
});
