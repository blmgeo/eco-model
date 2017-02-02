'use strict'

class SteadyState {
    /**
    * @constructor
    * @param {Object} props - residence, flow, and stock properties.
    */
    constructor(props) {
        this._residence = props.residence
        this._flow = props.flow
        this._stock = props.stock
    }
    /**
    * @return {number} residence time
    */
    residence() {
        if(this._residence) return this._residence
        if (!this._flow) throw 'flow not defined.'
        this._residence = this._stock / this._flow
        return this._residence
    }
    /**
    * @return {number} flow rate
    */
    flow() {
        if(this._flow) return this._flow
        if (!this._residence) throw 'residence not defined.'
        this._flow = this._stock / this._residence
        return this._flow
    }
    /**
    * @return {number} stock
    */
    stock() {
        if(this._stock) return this._stock
        this._stock = this._flow * this._residence
        return this._stock
    }
}

module.exports = SteadyState
