import foodReducer from './Reducers/Foods'
import loadingReducer from './Reducers/Loading'
import modalReducer from './Reducers/Modal'

import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const logger = store => next => action => {
    return next(action)
}

const rootReducer = combineReducers({
    foodReducer,
    loadingReducer,
    modalReducer
})

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk, logger)))

export default store