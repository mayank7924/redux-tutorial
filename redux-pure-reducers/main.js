const store = require("./store")

//subscribe will run the callback function when reducer returns the new state
store.subscribe(() => {
    console.log(store.getState())
})

//action objects
const increment = {
    type: "INCREMENT"
}

const decrement = {
    type: "DECREMENT"
}

const updateName = {
    type: "UPDATE_NAME",
    payload: {
        name: "jane"
    }
}

//action objects for the new reducer auth
const login = {
    type: "LOGIN"
}

const logout = {
    type: "LOGOUT"
}

const setUsername = {
    type: "SET_USERNAME",
    payload: {
        username: "john_123"
    }
}

const items = {
    type: "ADD_ITEM",
    payload: {
        item: "item"
    }
}

store.dispatch(increment)

store.dispatch(updateName)

store.dispatch(login)

store.dispatch(setUsername)

store.dispatch(items)

store.dispatch(items)