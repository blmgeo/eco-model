'use strict'

//non steady state box models
const NonSteadyState = {
  state(props) {
    if (!props) return this
    else return Object.assign(Object.create(this), props)
  },
  update(props) {
    if (props) {
      for (let key in props) {
        if (this.hasOwnProperty(key)) {
          this[key] = props[key]
        } else throw 'Property "' + key + '" does not exist.'
      }
    }
  },
  flowAt(time) {
    let currentFlow = this.flow
    for (let i = 1; i <= time; i++) {
      currentFlow += this.flow
    }
    return currentFlow
  },
  stockAt(time) {
    let currentStock = this.stock
    for (let i = 1; i <= time; i++) {
      currentStock += this.flow
    }
    return currentStock
  }
}

module.exports = NonSteadyState
