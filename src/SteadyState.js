'use strict'

//steady state box models
const SteadyState = {
  state(props) {
    if (!props) return this
    else return Object.assign(Object.create(this), props)
  },
  _residence() {
    if(this.residence) return this.residence
    if (!this.flow) throw 'Flow not defined.'
    this.residence = this.stock / this.flow
    return this.residence
  },
  _flow() {
    if(this.flow) return this.flow
    if (!this.residence) throw 'Residence not defined.'
    this.flow = this.stock / this.residence
    return this.flow
  },
  _stock() {
    if(this.stock) return this.stock
    this.stock = this.flow * this.residence
    return this.stock
  }
}

module.exports = SteadyState
