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
        this[key] = props[key]
      }
    }
  },
  flowAt(time) {
    if (!this.hasOwnProperty("deltaFlow")) this.deltaFlow = 0
    let currentFlow = this.flow
    for (let i = 1; i <= time; i++) {
      currentFlow += this.deltaFlow
    }
    return currentFlow
  },
  stockAt(time) {
    if (!this.hasOwnProperty("deltaFlow")) this.deltaFlow = 0
    let currentStock = this.stock
    for (let i = 1; i <= time; i++) {
      currentStock += (this.deltaFlow === 0) ? this.flow : this.flowAt(i)
    }
    return currentStock
  }
}

module.exports = NonSteadyState
