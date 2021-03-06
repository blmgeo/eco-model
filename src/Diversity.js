// species -> array of species population count
export default (species) => {
  const sum = (x, y) => x + y

  const factorial = (x, a = 1) => {
    if (x < 2) return a
    return factorial(x - 1, a * x)
  }

  // Species populations over 0
  const s = species.filter(x => x > 0)

  // Sum of species populations
  const N = s.reduce(sum)

  /**
  * @return {number} Species richness of sample
  */
  const richness = () => {
    return s.length
  }

  /**
  * @return {number} Berger-Parker diversity index
  */
  const bergerParker = () => {
    return Math.max(...s) / N
  }

  /**
  * @return {number} Brillouin diversity index
  */
  const brillouin = () => {
    const log = n => Math.log(factorial(n))
    const sumLog = s.map(log).reduce(sum)
    return (log(N) - sumLog) / N
  }

  /**
  * @return {number} Margalef diversity index
  */
  const margalef = () => {
    return (richness() - 1) / Math.log(N)
  }

  /**
  * @return {number} Menhinick diversity index
  */
  const menhinick = () => {
    return richness() / Math.sqrt(N)
  }

  /**
  * @return {number} Shannon diversity index
  */
  const shannon = () => {
    return -1 * s.map(x => (x / N) * Math.log(x / N)).reduce(sum)
  }

  /**
  * @return {number} Simpson diversity index
  */
  const simpson = () => {
    return s.map(x => Math.pow(x / N, 2)).reduce(sum)
  }

  /**
  * @return {number} 1 - Simpson diversity index
  */
  const simpsonDiversity = () => {
    return 1 - simpson()
  }

  /**
  * @return {number} Simpson Dominance index
  */
  const simpsonDominance = () => {
    return 1 / simpson()
  }

  return {
    richness,
    brillouin,
    bergerParker,
    margalef,
    menhinick,
    simpson,
    simpsonDiversity,
    simpsonDominance,
    shannon,
  }
}