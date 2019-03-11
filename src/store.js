import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const initialState = { }

const reducer = (state, action) => {
    return state;
}

export default createStore(reducer, initialState, applyMiddleware(thunk))