'use strict'

//steady state box models
const SteadyState = {
    residence: 0,
    stock: 0,
    productivity: 0,
    net: 0,
    gross: 0,
    loss: 0,
    state(props) {
      if (!props) return this
      for (let key in props) {
        if (this.hasOwnProperty(key)) {
          this[key] = props[key]
        } else throw 'Property "' + key + '" does not exist.'
      }
    },
    residence() {
      if (this.productivity === 0) throw 'Productivity cannot be 0.'
      this.residence = this.stock / this.productivity
      return this.residence
    },
    productivity() {
      if (this.residence === 0) throw 'Residence cannot be 0.'
      this.productivity = this.stock / this.residence
      return this.productivity
    },
    stock() {
      if (this.residence === 0) throw 'Residence cannot be 0.'
      this.stock = this.productivity * this.residence
      return this.stock
    },
    net() {
      this.net = this.gross - this.loss
      return this.net
    }
}

module.exports = SteadyState
