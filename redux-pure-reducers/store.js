const {createStore, combineReducers} = require("redux")

const initState = {
	counter: 0,
    name: "john",
    items: []
}

//reducer is a function which takes initial state and action as parameters
//and returns the updated state
const reducer = (state = initState, action) => {
    const stateCopy = {...state, items: [...state.items]}
    if(action.type==="INCREMENT") {
        stateCopy.counter++
    }
    else if(action.type==="DECREMENT") {
        stateCopy.counter--
    }
    else if(action.type==="UPDATE_NAME") {
        stateCopy.name = action.payload.name
    }
    else if(action.type==="ADD_ITEM") {
        stateCopy.items.push(action.payload.item)
    }
    return stateCopy
}

const initAuth = {
    loggedIn: false,
    username: ""
}

const auth = (state = initAuth, action) => {
    const stateCopy = {...state}
    if(action.type === "LOGIN") {
        stateCopy.loggedIn = true;
    }
    else if(action.type === "LOGOUT") {
        stateCopy.loggedIn = false;
    }
    else if(action.type==="SET_USERNAME") {
        stateCopy.username = action.payload.username;
    }
    return stateCopy;
}

const rootReducer = combineReducers({
    reducer,
    auth
})

const store = createStore(rootReducer)

module.exports = store


