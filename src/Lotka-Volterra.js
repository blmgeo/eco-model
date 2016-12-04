'use strict'

//Lotka-Volterra Predator-Prey Model
const Lotka_Volterra = {
  state(props) {
    if (!props) return this
    else return Object.assign(Object.create(this), props)
  },
  deltaX(lastX, lastY, increment) {
    const inc = increment || 1
    return lastX * (this.birth - this.predation * lastY) * inc
  },
  deltaY(lastX, lastY, increment) {
    const inc = increment || 1
    return lastY * (this.assimilation * lastX - this.death) * inc
  },
  nextX(lastX, lastY, increment) {
    const inc = increment || 1
    return lastX + this.deltaX(lastX, lastY, inc)
  },
  nextY(lastX, lastY, increment) {
    const inc = increment || 1
    return lastY + this.deltaY(lastX, lastY, inc)
  },
  popAt(time, increment) {
    const inc = increment || 1
    return this.popOver(time, inc)[time]
  },
  popOver(time, increment) {
    const inc = increment || 1
    let data = [{time: 0, prey: this.prey, predator: this.predator}]
    for (let i = 1; i <= time; i += inc) {
      data.push({
        time: i,
        prey: this.nextX(data[i-1].x, data[i-1].y, inc),
        predator: this.nextY(data[i-1].x, data[i-1].y, inc)
      })
    }
    return data
  }
}

module.exports = Lotka_Volterra
