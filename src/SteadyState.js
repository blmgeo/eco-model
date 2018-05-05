export default (r, f, s) => {
  /**
  * @return {number} residence time
  */
  const residence = () => {
    if (r) return r
    if (!f) throw new Error('Flow not defined.')
    return s / f
  }

  /**
  * @return {number} flow rate
  */
  const flow = () => {
    if (f) return f
    if (!r) throw new Error('Residence not defined.')
    return s / r
  }

  /**
  * @return {number} stock
  */
  const stock = () => {
    return s ? s : f * r
  }

  return {
    residence,
    flow,
    stock,
  }
}
