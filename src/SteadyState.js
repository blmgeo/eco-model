'use strict'

//steady state box models
const SteadyState = {
  state(props) {
    if (!props) return this
    else return Object.assign(Object.create(this), props)
  },
  _residence() {
    if (this.productivity === 0) throw 'Productivity cannot be 0.'
    this.residence = this.stock / this.productivity
    return this.residence
  },
  _productivity() {
    if (this.residence === 0) throw 'Residence cannot be 0.'
    this.productivity = this.stock / this.residence
    return this.productivity
  },
  _stock() {
    this.stock = this.productivity * this.residence
    return this.stock
  },
  _net() {
    this.net = this.gross - this.loss
    return this.net
  }
}

module.exports = SteadyState
