export default () => {
  /**
  * Gompertz function
  * @param {number} a - Asymptote of the function
  * @param {number} b - X-axis displacement
  * @param {number} c - Growth rate
  * @param {number} t - time in the future
  */
  const gompertz = (a, b, c, t) => {
    const exp = (x, y) => Math.exp(-1 * x * y);
    return a * exp(b, exp(c, t));
  }

  return {
    gompertz,
  }
}
