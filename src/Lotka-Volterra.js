'use strict'

//Lotka-Volterra Predator-Prey Model
const Lotka_Volterra = {
  state(props) {
    if (!props) return this
    else return Object.assign(Object.create(this), props)
  },
  deltaX(lastX, lastY) {
    return lastX * (this.birth - this.predation * lastY)
  },
  deltaY(lastX, lastY) {
    return lastY * (this.assimilation * lastX - this.death)
  },
  nextX(lastX, lastY) {
    return lastX + this.deltaX(lastX, lastY)
  },
  nextY(lastX, lastY) {
    return lastY + this.deltaY(lastX, lastY)
  },
  popAt(time) {
    return this.popOver(time, inc)[time]
  },
  popOver(time) {
    let data = [{time: 0, prey: this.prey, predator: this.predator}]
    for (let i = 1; i <= time; i += 1) {
      data.push({
        time: i,
        prey: this.nextX(data[i-1].prey, data[i-1].predator),
        predator: this.nextY(data[i-1].prey, data[i-1].predator)
      })
    }
    return data
  }
}

module.exports = Lotka_Volterra
