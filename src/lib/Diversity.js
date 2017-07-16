const sum = (a, b) => a + b;

const factorial = (n) => {
  if (n < 0) return undefined;
  if (n === 0) return 1;
  let num = n;
  for (let i = n - 1; i > 0; i -= 1) num *= i;
  return num;
};

const filter = s => s.filter(el => el > 0);

/**
* @constructor
*/
class Diversity {
  constructor(species) {
    this.species = species;
  }

  /**
  * @return {number} Number of types of species in sample
  */
  richness() {
    return filter(this.species).length;
  }
  /**
  * @return {number} Berger-Parker diversity index
  */
  bergerParker() {
    const species = filter(this.species);
    const max = Math.max.apply(null, species);
    const N = species.reduce(sum);
    return max / N;
  }
  /**
  * @return {number} Brillouin diversity index
  */
  brillouin() {
    const species = filter(this.species);
    const N = species.reduce(sum);
    const logN = n => Math.log(factorial(n));
    return (logN(N) - species.map(n => logN(n)).reduce(sum)) / N;
  }
  /**
  * @return {number} Margalef diversity index
  */
  margalef() {
    const species = filter(this.species);
    const richness = this.richness(species);
    const N = species.reduce(sum);
    return (richness - 1) / Math.log(N);
  }
  /**
  * @return {number} Menhinick diversity index
  */
  menhinick() {
    const species = filter(this.species);
    const richness = this.richness(species);
    const N = species.reduce(sum);
    return richness / Math.sqrt(N);
  }
  /**
  * @return {number} Shannon diversity index
  */
  shannon() {
    const species = filter(this.species);
    const N = species.reduce(sum);
    const rows = species.map(el => (el / N) * Math.log(el / N));
    return -1 * rows.reduce(sum);
  }
  /**
  * @return {number} Simpson diversity index
  */
  simpson() {
    const species = filter(this.species);
    const N = species.reduce(sum);
    return species.map(n => Math.pow(n / N, 2)).reduce(sum);
  }
  /**
  * @param {Array} Species - Abundance of each species
  * @return {number} 1 - Simpson diversity index
  */
  simpsonDiversity() {
    return 1 - this.simpson(this.species);
  }
  /**
  * @param {Array} Species - Abundance of each species
  * @return {number} Simpson Dominance index
  */
  simpsonDominance() {
    return 1 / this.simpson(this.species);
  }
}

module.exports = Diversity;
