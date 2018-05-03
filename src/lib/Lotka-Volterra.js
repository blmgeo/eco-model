import FP from 'functional.js';

// props is object with properties: birth, death, prey, predator, assimilation, predation
export default (props) => {
  const [ birth, death, prey, predator, assimilation, predation ] = props

  /**
  * Calculate the change in prey population.
  * @param {number} lastX - Previous prey population.
  * @param {number} lastY - Previous predator population.
  */
  const deltaX = (lastX, lastY) => {
    return lastX * (birth - (predation * lastY));
  }

  /**
  * Calculate the change in predator population.
  * @param {number} lastX - Previous prey population.
  * @param {number} lastY - Previous predator population.
  */
  const deltaY = (lastX, lastY) => {
    return lastY * (assimilation * (lastX - death));
  }

  /**
  * Calculate the next prey population.
  * @param {number} lastX - Previous prey population.
  * @param {number} lastY - Previous predator population.
  */
  const nextX = (lastX, lastY) => {
    return lastX + deltaX(lastX, lastY);
  }

  /**
  * Calculate the next predator population.
  * @param {number} lastX - Previous prey population.
  * @param {number} lastY - Previous predator population.
  */
  const nextY = (lastX, lastY) => {
    return lastY + deltaY(lastX, lastY);
  }

  /**
  * Find the predator and prey population over a period of time.
  * @param {number} time - Time in the future (units unspecified).
  */
  const populationOver = time => {
    const population = [{
      time: 0,
      prey,
      predator,
    }];

    for (let i = 1; i <= time; i += 1) {
      let p = population[i - 1];

      population.push({
        time: i,
        prey: nextX(p.prey, p.predator),
        predator: nextY(p.prey, p.predator),
      });
    }

    return population;
  }

  /**
  * Find the predator and prey population at a given time.
  * @param {number} time - Time in the future (units unspecified).
  */
  const populationAt = time => {
    return populationOver(time)[time];
  }

  return {
    deltaX,
    deltaY,
    nextX,
    nextY,
    populationAt,
    populationOver,
  }
}
