'use strict'

let Gompertz = {
  const Gompertz = {
  asymptote: 0,
  displacement: 0,
  rate: 0,
  state(props) {
    if (!props) return this
    for (let key in props) {
      if (this.hasOwnProperty(key)) {
        this[key] = props[key]
      } else throw 'Property "' + key + '" does not exist.'
    }
  },
  curveAt(time) {
    return this.asymptote * Math.exp( -1 * this.displacement * Math.exp( -1 * this.rate * time ))
  },
  curveOver(time, increment) {
    let data = []
    for (let i = 0; i <= time; i += increment) {
      data.push({
        time: i,
        curveAt: this.curveAt(i)
      })
    }
    return data
  }
}
