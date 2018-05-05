import { range, pipe } from 'rxjs'
import { map } from 'rxjs/operators'

export default (birth, death, prey, predator, assimilation, predation) => {
  /**
  * Calculate the change in prey population.
  * @param {number} lastPrey - Previous prey population.
  * @param {number} lastPred - Previous predator population.
  */
  const deltaPrey = (lastPrey, lastPred) => {
    return lastPrey * (birth - (predation * lastPred))
  }

  /**
  * Calculate the change in predator population.
  * @param {number} lastPrey - Previous prey population.
  * @param {number} lastPred - Previous predator population.
  */
  const deltaPred = (lastPrey, lastPred) => {
    return lastPred * (assimilation * (lastPrey - death))
  }

  /**
  * Calculate the next prey population.
  * @param {number} lastPrey - Previous prey population.
  * @param {number} lastPred - Previous predator population.
  */
  const nextPrey = (lastPrey, lastPred) => {
    return lastPrey + deltaPrey(lastPrey, lastPred)
  }

  /**
  * Calculate the next predator population.
  * @param {number} lastPrey - Previous prey population.
  * @param {number} lastPred - Previous predator population.
  */
  const nextPred = (lastPrey, lastPred) => {
    return lastPred + deltaPred(lastPrey, lastPred)
  }

  /**
  * Get the population over time.
  * @param {number} t - Time in the future (units unspecified).
  */
  const populationOver = t => {
    const population = [{ prey, predator }]

    const nextPopulation = x => {
      const { prey, predator } = population[x]

      return {
        prey: nextPrey(prey, predator),
        predator: nextPred(prey, predator),
      }
    }

    range(0, t)
    .pipe(map(x => nextPopulation(x)))
    .subscribe(p => population.push(p))

    return population
  }

  /**
  * Get the population at a specific time.
  * @param {number} t - Time in the future (units unspecified).
  */
  const populationAt = t => {
    return populationOver(t)[t]
  }

  return {
    deltaPrey,
    deltaPred,
    nextPrey,
    nextPred,
    populationAt,
    populationOver,
  }
}
