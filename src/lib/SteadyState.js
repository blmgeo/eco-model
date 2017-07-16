class SteadyState {
  /**
  * @constructor
  * @param {Object} props - residence, flow, and stock properties.
  */
  constructor(props) {
    this.r = props.residence;
    this.f = props.flow;
    this.s = props.s;
  }
  /**
  * @return {number} residence time
  */
  residence() {
    if (this.r) return this.r;
    if (!this.f) throw new Error('Flow not defined.');
    else this.r = this.s / this.f;
    return this.r;
  }
  /**
  * @return {number} flow rate
  */
  flow() {
    if (this.f) return this.f;
    if (!this.r) throw new Error('Residence not defined.');
    else this.f = this.s / this.r;
    return this.f;
  }
  /**
  * @return {number} s
  */
  stock() {
    if (this.s) return this.s;
    this.s = this.f * this.r;
    return this.s;
  }
}

module.exports = SteadyState;
