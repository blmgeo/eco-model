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
    return this
  },
  flowAt(time) {
    let currentFlow = this.flow
    currentFlow += (this.deltaFlow * time)
    return currentFlow
  },
  stockAt(time) {
    let currentStock = this.stock
    currentStock += (this.flow * time)
    return currentStock
  }
}

module.exports = NonSteadyState
