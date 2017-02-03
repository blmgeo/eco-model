const assert = require('chai').assert,
Diversity = require('../src/Diversity'),
Lotka_Volterra = require('../src/Lotka-Volterra'),
NonSteadyState = require('../src/NonSteadyState'),
Sigmoid = require('../src/Sigmoid'),
SteadyState = require('../src/SteadyState')


//Diversity Test Cases
describe('Diversity module', () => {
    let model = new Diversity()
    describe('#bergerParker(species)', () => {
        it('should return the correct Berger-Parker index', () => {
            let expected = (1/3).toFixed(5)
            result = model.bergerParker([1,2,3,4,5]).toFixed(5)
            assert.equal(expected, result)
        })
    })
    describe('#brillouin(species)', () => {
        it('should return the correct Brillouin index', () => {
            let expected = 1.16325
            result = model.brillouin([1,2,3,4,5]).toFixed(5)
            assert.equal(expected, result)
        })
    })
    describe('#margalef(species)', () => {
        it('should return the correct Margalef index', () => {
            let expected = 1.47708
            result = model.margalef([1,2,3,4,5]).toFixed(5)
            assert.equal(expected, result)
        })
    })
    describe('#menhinick(species)', () => {
        it('should return the correct Menhinick index', () => {
            let expected = 1.29099
            result = model.menhinick([1,2,3,4,5]).toFixed(5)
            assert.equal(expected, result)
        })
    })
    describe('#richness(species)', () => {
        it('should return the number of species types', () => {
            let expected = 5
            result = model.richness([1,2,3,4,5]).toFixed(5)
            assert.equal(expected, result)
        })
    })
    describe('#shannon(species)', () => {
        it('should return the correct Shannon index', () => {
            let expected = 1.48975
            result = model.shannon([1,2,3,4,5]).toFixed(5)
            assert.equal(expected, result)
        })
    })
    describe('#simpson(species)', () => {
        it('should return the correct Simpson index', () => {
            let expected = 0.24444
            result = model.simpson([1,2,3,4,5]).toFixed(5)
            assert.equal(expected, result)
        })
    })
    describe('#simpsonDiversity(species)', () => {
        it('should return the correct Simpson Diversity index', () => {
            let expected = (1 - 0.2444444444444).toFixed(5)
            result = model.simpsonDiversity([1,2,3,4,5]).toFixed(5)
            assert.equal(expected, result)
        })
    })
    describe('#simpsonDominance(species)', () => {
        it('should return the correct Simpson Dominance index', () => {
            let expected = (1 / 0.2444444444444).toFixed(5)
            result = model.simpsonDominance([1,2,3,4,5]).toFixed(5)
            assert.equal(expected, result)
        })
    })
})

//Lotka-Volterra Test Cases
describe('Lotka-Volterra module', () => {
    let model = new Lotka_Volterra({
        birth: 1,
        death: 1,
        prey: 1,
        predator: 1,
        assimilation: 1,
        predation: 1
    })
    describe('#popAt(1)', () => {
        it('should return the correct populations at time=1', () => {
            let result = model.popAt(1)
            expected = {
                time: 1,
                prey: 1,
                predator: 1
            }
            assert.deepEqual(expected, result)
        })
    })
    describe('#popOver(1)', () => {
        it('should return the correct populations up to time=1', () => {
            let result = model.popOver(1)
            expected = [{
                time: 0,
                prey: 1,
                predator: 1
            },{
                time: 1,
                prey: 1,
                predator: 1
            }]
            assert.deepEqual(expected, result)
        })
    })
})

//NonSteadyState Test Cases
describe('NonSteadyState module', () => {
    let model = new NonSteadyState({
        flow: 1,
        stock: 1,
        deltaFlow: 1
    })
    describe('#stockAt(1)', () => {
        it('should return the correct stock at time=1', () => {
            let result = model.stockAt(1),
            expected = 3
            assert.equal(expected, result)
        })
    })
    describe('#flowAt(1)', () => {
        it('should return the correct flow at time=1', () => {
            let result = model.flowAt(1),
            expected = 2
            assert.equal(expected, result)
        })
    })
    describe('#update(props)', () => {
        it('should return an updated model', () => {
            let result = model.update({
                flow: 2,
                stock: 2,
                deltaFlow: 2
            }),
            expected = {
                flow: 2,
                stock: 2,
                deltaFlow: 2
            }
            assert.deepEqual(expected, result)
        })
    })
})

//SteadyState Test Cases
describe('SteadyState module', () => {
    let model = new SteadyState({
        flow: 1,
        stock: 1,
        residence: 1
    })
    describe('#residence()', () => {
        it('should return the correct residence time', () => {
            let result = model.residence(),
            expected = 1
            assert.equal(expected, result)
        })
    })
    describe('#flow()', () => {
        it('should return the correct flow rate', () => {
            let result = model.flow(),
            expected = 1
            assert.equal(expected, result)
        })
    })
    describe('#stock()', () => {
        it('should return the correct stock', () => {
            let result = model.stock(),
            expected = 1
            assert.equal(expected, result)
        })
    })
})

//Sigmoid Test Cases
describe('Sigmoid module', () => {
    let model = new Sigmoid()
    describe('#gompertz(1,1,1,1)', () => {
        it('should return the correct value', () => {
            let result = model.gompertz(1,1,1,1).toFixed(5),
            expected = 0.6922006275553462.toFixed(5)
            assert.equal(expected, result)
        })
    })
})
