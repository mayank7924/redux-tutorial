const {createStore} = require("redux")

const initState = {
	counter: 0,
    name: "john"
}

//reducer is a function which takes initial state and action as parameters
//and returns the updated state
const reducer = (state=initState, action) => {
    if(action.type==="INCREMENT") {
        state.counter++
        return state
    }
    else if(action.type==="DECREMENT") {
        state.counter--
        return state
    }
    else if(action.type==="UPDATE_NAME") {
        state.name = action.payload.name
        return state
    }
    else return state
}

const store = createStore(reducer)

module.exports = store