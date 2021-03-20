import reducer from './reducer'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const logger = store => next => action => {
    console.log(`[MIDDLAWARE DIPATCHING]: ${action}`)
    return next(action)
}

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk, logger)))

export default store