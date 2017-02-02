'use strict'

class NonSteadyState {
    /**
    * @constructor
    * @params {Object} props - flow, deltaFlow, and stock properties.
    */
    constructor(props) {
        this.flow = props.flow
        this.deltaFlow = props.deltaFlow
        this.stock = props.stock
    }
    /**
    * Update instance properties.
    * @params {Object} props - Instance properties to update.
    * @return {Object} Updated instance.
    */
    update(props) {
        if (props) {
            for (let key in props) {
                if (this.hasOwnProperty(key)) {
                    this[key] = props[key]
                } else throw 'Property "' + key + '" does not exist.'
            }
        }
        return this
    }
    /**
    * Calculate flow at a given time.
    * @params {number} time - Time in the future.
    * @return {number} flow
    */
    flowAt(time) {
        let currentFlow = this.flow || 0,
        deltaFlow = this.deltaFlow || 0
        currentFlow += (deltaFlow * time)
        return currentFlow
    }
    /**
    * Calculate stock at a given time.
    * @params {number} time - Time in the future
    * @return {number} stock
    */
    stockAt(time) {
        let currentStock = this.stock || 0
        currentStock += (this.flowAt(time) * time)
        return currentStock
    }
}

module.exports = NonSteadyState
