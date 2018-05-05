export default (stock, flow, deltaFlow) => {
  /**
  * Calculate flow at a given time.
  * @param {number} time - Time in the future.
  * @return {number} flow
  */
  const flowAt = time => {
    return flow + (deltaFlow * time)
  }
  
  /**
  * Calculate stock at a given time.
  * @param {number} time - Time in the future
  * @return {number} stock
  */
  const stockAt = time => {
    return stock + (flowAt(time) * time)
  }

  return {
    flowAt,
    stockAt,
  }
}
