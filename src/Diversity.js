'use strict'

const sum = (a,b) => a + b,

factorial = n => {
  if (n < 0) return undefined
  if (n === 0) return 1
  for (let i = n - 1; i > 0; i--) n *= i
  return n
}

/**
* @constructor
*/
class Diversity {
    /**
    * @param {Array} Species - Abundance of each species
    * @return {number} Berger-Parker diversity index
    */
    bergerParker(species) {
        species = species.filter(el => el > 0)
        let max = Math.max.apply(null, species),
        N = species.reduce(sum),
        diversity = max / N
        return diversity
    }
    /**
    * @param {Array} Species - Abundance of each species
    * @return {number} Brillouin diversity index
    */
    brillouin(species) {
        species = species.filter(el => el > 0)
        let N = species.reduce(sum),
        diversity = (Math.log(factorial(N)) - species.map(n => Math.log(factorial(n))).reduce(sum)) / N
        return diversity
    }
    /**
    * @param {Array} Species - Abundance of each species
    * @return {number} Margalef diversity index
    */
    margalef(species) {
        species = species.filter(el => el > 0)
        let S = this.richness(species),
        N = species.reduce(sum),
        diversity = (S - 1) / Math.log(N)
        return diversity
    }
    /**
    * @param {Array} Species - Abundance of each species
    * @return {number} Menhinick diversity index
    */
    menhinick(species) {
        species = species.filter(el => el > 0)
        let S = this.richness(species),
        N = species.reduce(sum),
        diversity = S / Math.sqrt(N)
        return diversity
    }
    /**
    * @param {Array} Species - Abundance of each species
    * @return {number} Number of types of species in sample
    */
    richness(species) {
        species = species.filter(el => el > 0)
        return species.length
    }
    /**
    * @param {Array} Species - Abundance of each species
    * @return {number} Shannon diversity index
    */
    shannon(species) {
        species = species.filter(el => el > 0)
        let N = species.reduce(sum),
        rows = species.map(el => (el / N) * Math.log(el / N)),
        diversity = rows.reduce(sum) * -1
        return diversity
    }
    /**
    * @param {Array} Species - Abundance of each species
    * @return {number} Simpson diversity index
    */
    simpson(species) {
        species = species.filter(el => el > 0)
        let N = species.reduce(sum),
        diversity = species.map(n => Math.pow(n / N, 2)).reduce(sum)
        return diversity
    }
    /**
    * @param {Array} Species - Abundance of each species
    * @return {number} 1 - Simpson diversity index
    */
    simpsonDiversity(species) {
        let diversity = 1 - this.simpson(species)
        return diversity
    }
    /**
    * @param {Array} Species - Abundance of each species
    * @return {number} Simpson Dominance index
    */
    simpsonDominance(species) {
        let diversity = 1 / this.simpson(species)
        return diversity
    }
}

module.exports = Diversity
