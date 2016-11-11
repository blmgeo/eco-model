'use strict'

//steady state box models
const SteadyState = {
  state(props) {
    if (!props) return this
    else return Object.assign(Object.create(this), props)
  },
  _residence() {
    if (this.flow === 0) throw 'Flow cannot be 0.'
    this.residence = this.stock / this.flow
    return this.residence
  },
  _flow() {
    if (this.residence === 0) throw 'Residence cannot be 0.'
    this.flow = this.stock / this.residence
    return this.flow
  },
  _stock() {
    this.stock = this.flow * this.residence
    return this.stock
  }
}

module.exports = SteadyState
