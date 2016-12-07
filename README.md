# eco-model

JavaScript library for ecosystem modeling and analysis. https://blmgeo.github.io/eco-model

## Steady State  

A steady-state model is initialized by calling the `state` method and passing an object with `residence`, `flow`, and/or `stock` properties, e.g.  
~~~
const model = SteadyState.state({
  flow: 10,
  stock: 1000
})
~~~
In this case, `._residence()` yields the residence time of the model. 

### Methods  
__SteadyState.state(props)__  
Initialize a model with `residence`, `flow`, and/or `stock` properties.  

__model._residence()__  
Find the residence time of an initialized model.

__model._flow()__  
Find the flow rate of an initialized model.

__model._stock()__  
Find the stock of an initialized model.


