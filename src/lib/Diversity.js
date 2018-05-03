import FP from 'functional.js';

export default (species) => {
  const sum = FP.reduce((a, b) => a + b)

  const factorial = (n) => {
    if (n === 1) return n;
    if (n === 0) return 1;
    if (n < 0) return undefined;

    let result = factorial(n - 1) * n;
    return result;
  };

  const s = species.filter(el => el > 0)
  const N = sum(s)

  /**
  * @return {number} Species richness of sample
  */
  const richness = () => {
    return s.length;
  }

  /**
  * @return {number} Berger-Parker diversity index
  */
  const bergerParker = () => {
    return Math.max.apply(null, s) / N;
  }

  /**
  * @return {number} Brillouin diversity index
  */
  const brillouin = () => {
    const log = FP.compose(Math.log, factorial)
    const logMap = FP.map(log)
    const sumLogMap = FP.compose(sum, logMap)
    return (log(N) - sumLogMap(s)) / N;
  }

  /**
  * @return {number} Margalef diversity index
  */
  const margalef = () => {
    return (richness(s) - 1) / Math.log(N);
  }

  /**
  * @return {number} Menhinick diversity index
  */
  const menhinick = () => {
    return richness(s) / Math.sqrt(N);
  }

  /**
  * @return {number} Shannon diversity index
  */
  const shannon = () => {
    const rows = FP.map(el => (el / N) * Math.log(el / N))
    const sumRows = FP.compose(sum, rows)
    return -1 * sumRows(s);
  }

  /**
  * @return {number} Simpson diversity index
  */
  const simpson = () => {
    const powMap = FP.map(n => Math.pow(n / N, 2));
    const sumPowMap = FP.compose(sum, powMap);
    return sumPowMap(s);
  }

  /**
  * @param {Array} Species - Abundance of each species
  * @return {number} 1 - Simpson diversity index
  */
  const simpsonDiversity = () => {
    return 1 - simpson(s);
  }

  /**
  * @param {Array} Species - Abundance of each species
  * @return {number} Simpson Dominance index
  */
  const simpsonDominance = () => {
    return 1 / simpson(s);
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