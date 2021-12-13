const store = require("./store")

//subscribe will run the callback function when reducer returns the new state
store.subscribe(() => {
    console.log(store.getState())
})

//action object
const increment = {
    type: "INCREMENT"
}

//action object
const decrement = {
    type: "DECREMENT"
}

//action object
const updateName = {
    type: "UPDATE_NAME",
    payload: {
        name: "jane"
    }
}

store.dispatch(increment)

store.dispatch(increment)

store.dispatch(updateName)

store.dispatch(decrement)