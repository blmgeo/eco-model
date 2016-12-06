'use strict'

//Gompertz function
const Gompertz = {
  state(props) {
    if (!props) return this
    else return Object.assign(Object.create(this), props)
  },
  curveAt(time) {
    return this.asymptote * Math.exp( -1 * this.displacement * Math.exp( -1 * this.rate * time ))
  },
  curveOver(time, increment) {
    const inc = increment || 1,
    data = []
    for (let i = 0; i <= time; i += inc) {
      data.push({
        time: i,
        curveAt: this.curveAt(i)
      })
    }
    return data
  }
}

module.exports = Gompertz
