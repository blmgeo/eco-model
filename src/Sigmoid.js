'use strict'

const Sig = {
  gompertz(a, b, c, time) {
    return a * Math.exp( -1 * b * Math.exp( -1 * c * time ))
  }
}

module.exports = Sig
