'use strict'

class Lotka_Volterra {
    /**
    * @constructor
    */
    constructor(props) {
        this.birth = props.birth
        this.death = props.death
        this.prey = props.prey
        this.predator = props.predator
        this.assimilation = props.assimilation
        this.predation = props.predation
    }
    /**
    * Calculate the change in prey population.
    * @param {number} lastX - Previous prey population.
    * @param {number} lastY - Previous predator population.
    */
    deltaX(lastX, lastY) {
        return lastX * (this.birth - this.predation * lastY)
    }
    /**
    * Calculate the change in predator population.
    * @param {number} lastX - Previous prey population.
    * @param {number} lastY - Previous predator population.
    */
    deltaY(lastX, lastY) {
        return lastY * (this.assimilation * lastX - this.death)
    }
    /**
    * Calculate the next prey population.
    * @param {number} lastX - Previous prey population.
    * @param {number} lastY - Previous predator population.
    */
    nextX(lastX, lastY) {
        return lastX + this.deltaX(lastX, lastY)
    }
    /**
    * Calculate the next predator population.
    * @param {number} lastX - Previous prey population.
    * @param {number} lastY - Previous predator population.
    */
    nextY(lastX, lastY) {
        return lastY + this.deltaY(lastX, lastY)
    }
    /**
    * Find the predator and prey population at a given time.
    * @param {number} time - Time in the future.
    */
    popAt(time) {
        return this.popOver(time)[time]
    }
    /**
    * Find the predator and prey population over a period of time.
    * @param {number} time - Time in the future.
    */
    popOver(time) {
        let data = [{
            time: 0,
            prey: this.prey,
            predator: this.predator
        }]
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
