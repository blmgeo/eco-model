'use strict'
//Species Diversity Indices
const sum = (a,b) => a + b,

factorial = n => {
  if (n < 0) return undefined
  if (n === 0) return 1
  for (let i = n - 1; i > 0; i--) n *= i
  return n
},

Diversity = {
  bergerParker(species) {
    let max = Math.max.apply(null, species),
    N = species.reduce(sum),
    diversity = max / N
    return diversity
  },
  brillouin(species) {
    let N = species.reduce(sum),
    diversity = (Math.log(factorial(N)) - species.map(n => Math.log(factorial(n))).reduce(sum)) / N
    return diversity
  },
  margalef(species) {
    let S = D.richness(species),
    N = species.reduce(sum),
    diversity = (S - 1) / Math.log(N)
    return diversity
  },
  menhinick(species) {
    let S = D.richness(species),
    N = species.reduce(sum),
    diversity = S / Math.sqrt(N)
    return diversity
  },
  richness(species) {
    return species.length
  },
  shannon(species) {
    let N = species.reduce(sum),
    rows = species.map(el => (el / N) * Math.log(el / N)),
    diversity = rows.reduce(sum) * -1
    return diversity
  },
  simpson(species) {
    let N = species.reduce(sum),
    diversity = species.map(n => Math.pow(n / N, 2)).reduce(sum)
    return diversity
  },
  simpsonDiversity(species) {
    let diversity = 1 - D.simpson(species)
    return diversity
  },
  simpsonDominance(species) {
    let diversity = 1 / D.simpson(species)
    return diversity
  }
}

module.exports = Diversity
