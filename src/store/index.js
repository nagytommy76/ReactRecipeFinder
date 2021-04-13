import foodReducer from './Reducers/Foods'
import loadingReducer from './Reducers/Loading'
import modalReducer from './Reducers/Modal'

import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const logger = store => next => action => {
    return next(action)
}

const rootReducer = combineReducers({
    foodReducer,
    loadingReducer,
    modalReducer
})

const persistedReducer = persistReducer({ key: 'root', storage }, rootReducer)

const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk, logger)))
const persistor = persistStore(store)

const storeConfig = {
    store,
    persistor
}


export default storeConfig