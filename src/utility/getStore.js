import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './combinedReducers'
import defaultState  from './defaultState'
import createSagaMiddleware from 'redux-saga' 

export function getStore () {

    const sagaMiddleware = createSagaMiddleware ();
    const middleWares = [thunk, sagaMiddleware];

    const composables = [applyMiddleware (...middleWares)]

    const enhancer = compose (
        ...composables
    )

    const store = createStore (
        reducer,
        defaultState,
        enhancer
    );

    console.log ('Sagas applied')
    return store;
}