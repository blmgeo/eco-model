'use strict'

//Lotka-Volterra Predator-Prey Model
const Lotka_Volterra = {
  prey: 0, //prey population
  predator: 0, //predator population
  birth: 0, //birth rate of prey
  death: 0, //death rate of predator
  predation: 0, //rate of  of predation interaction
  assimilation: 0, //rate of conversion from prey to predator
  state(props) {
    if (!props) return this
    for (let key in props) {
      if (this.hasOwnProperty(key)) {
        this[key] = props[key]
      } else throw 'Property "' + key + '" does not exist.'
    }
  },
  deltaX(lastX, lastY, increment) {
    if (!increment) const increment = 1
    return lastX * (this.birth - this.predation * lastY) * increment
  },
  deltaY(lastX, lastY, increment) {
    if (!increment) const increment = 1
    return lastY * (this.assimilation * lastX - this.death) * increment
  },
  nextX(lastX, lastY, increment) {
    if (!increment) const increment = 1
    return lastX + this.deltaX(lastX, lastY, increment)
  },
  nextY(lastX, lastY, increment) {
    if (!increment) const increment = 1
    return lastY + this.deltaY(lastX, lastY, increment)
  },
  popAt(time, increment) {
    if (!increment) const increment = 1
    return this.popOver(time, increment)[time]
  },
  popOver(time, increment) {
    if (!increment) const increment = 1
    let data = [{time: 0, prey: this.prey, predator: this.predator}]
    for (let i = 1; i <= time; i += increment) {
      data.push({
        time: i,
        prey: this.nextX(data[i-1].x, data[i-1].y, increment),
        predator: this.nextY(data[i-1].x, data[i-1].y, increment)
      })
    }
    return data
  }
}

module.exports = Lotka_Volterra
