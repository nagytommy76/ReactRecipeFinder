import menuItemSlice from './Slices/MenuItemSlice'
import themeSlice from './Slices/ThemeSlice'
import FoodSlice from './Slices/FoodSlice'

import { configureStore } from '@reduxjs/toolkit'


const store = configureStore({
    reducer: {
        menuItemSlice,
        themeReducer: themeSlice,
        foodReducer: FoodSlice
    }
})

export default store




// import foodReducer from './Reducers/Foods'
// import loadingReducer from './Reducers/Loading'
// import modalReducer from './Reducers/Modal'
// import themeReducer from './Reducers/Theme'
// import videoReducer from './Reducers/Videos'
// import menuItemReducer from './Reducers/MenuItems'

// import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
// import thunk from 'redux-thunk'

// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export const rootReducer = combineReducers({
//     foodReducer,
//     loadingReducer,
//     modalReducer,
//     themeReducer,
//     videoReducer,
//     menuItemReducer
// })

// const persistedReducer = persistReducer({ key: 'root', storage, blacklist: ['menuItemReducer'] }, rootReducer)

// const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)))
// const persistor = persistStore(store)

// const storeConfig = {
//     store,
//     persistor
// }