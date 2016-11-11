'use strict'

//non steady state box models
const NonSteadyState = {
  state(props) {
    if (!props) return this
    else return Object.assign(Object.create(this), props)
  },
  flowAt(time, increment) {
    if (!increment) const increment = 1
    for (let i = 1; i <= time; i += increment) {
      this.flow += this.deltaFlow * increment
    }
    return this.flow
  },
  stockAt(time, increment) {
    if (!increment) const increment = 1
    for (let i = 1; i <= time; i += increment) {
      this.stock += this.flowAt(i, this.deltaFlow, increment)
    }
    return this.stock
  }
}

module.exports = NonSteadyState
