'use strict'

/**
* @constructor
*/
class Sigmoid {
    /**
    * Gompertz function
    * @param {number} a - Asymptote of the function
    * @param {number} b - X-axis displacement
    * @param {number} c - Growth rate
    * @param {number} t - time in the future
    */
    gompertz(a, b, c, t) {
        return a * Math.exp( -1 * b * Math.exp( -1 * c * t ))
    }
}

module.exports = Sigmoid
