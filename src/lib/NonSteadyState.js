export default (props) => {
  const [stock, flow, deltaFlow] = props

  /**
  * Update instance properties.
  * @params {Object} props - Instance properties to update.
  * @return {Object} Updated instance.
  */
  const update = props => {
    Object.keys(props).forEach((key) => {
      if (Object.prototype.hasOwnProperty.call(props, key)) {
        this[key] = props[key];
      } else throw new Error(`Property ${key} does not exist.`);
    });
    return this;
  }

  /**
  * Calculate flow at a given time.
  * @params {number} time - Time in the future.
  * @return {number} flow
  */
  const flowAt = time => {
    let currentFlow = flow || 0;
    const deltaFlow = deltaFlow || 0;
    currentFlow += (deltaFlow * time);
    return currentFlow;
  }
  
  /**
  * Calculate stock at a given time.
  * @params {number} time - Time in the future
  * @return {number} stock
  */
  const stockAt = time => {
    let currentStock = stock || 0;
    currentStock += (flowAt(time) * time);
    return currentStock;
  }

  return {
    update,
    flowAt,
    stockAt,
  }
}
