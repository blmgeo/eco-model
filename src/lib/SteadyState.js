export default (props) => {
  const [r, f, s] = props;

  /**
  * @return {number} residence time
  */
  const residence = () => {
    if (r) return r;
    if (!f) throw new Error('Flow not defined.');
    else r = s / f;
    return r;
  }

  /**
  * @return {number} flow rate
  */
  const flow = () => {
    if (f) return f;
    if (!r) throw new Error('Residence not defined.');
    else f = s / r;
    return f;
  }

  /**
  * @return {number} stock
  */
  const stock = () => {
    if (s) return s;
    s = f * r;
    return s;
  }

  return {
    residence,
    flow,
    stock,
  }
}
