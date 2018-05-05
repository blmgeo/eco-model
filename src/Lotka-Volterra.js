import { range, pipe } from 'rxjs'
import { map } from 'rxjs/operators'

// props is object with properties: birth, death, prey, predator, assimilation, predation
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
  * Find the predator and prey population over a period of time.
  * @param {number} time - Time in the future (units unspecified).
  */
  const populationOver = time => {
    const population = [{ prey, predator }]

    const nextPop = x => {
      const { prey, predator } = population[x]

      return {
        prey: nextPrey(prey, predator),
        predator: nextPred(prey, predator),
      }
    }

    range(0, time)
    .pipe(map(x => nextPop(x)))
    .subscribe(p => population.push(p))

    return population
  }

  /**
  * Find the predator and prey population at a given time.
  * @param {number} time - Time in the future (units unspecified).
  */
  const populationAt = time => {
    return populationOver(time)[time]
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
