import menuItemSlice from './Slices/MenuItemSlice'
import themeSlice from './Slices/ThemeSlice'
import foodSlice from './Slices/FoodSlice'
import loadingSlice from './Slices/LoadingSlice'
import modalSlice from './Slices/ModalSlice'
import videoSlice from './Slices/VideoSlice'

import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer,
    REGISTER,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE, 
} from 'redux-persist'

import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit'

export const rootReducer = combineReducers({
        menuItemReducer: menuItemSlice,
        themeReducer: themeSlice,
        foodReducer: foodSlice,
        loadingReducer: loadingSlice,
        modalReducer: modalSlice,
        videoReducer: videoSlice
    })

const persistedReducer = persistReducer({ key: 'root', storage, blacklist: [
    'loadingReducer',
    'modalReducer'
] }, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [REGISTER, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, ]
        }
    })
})

export const persistor = persistStore(store)

export default store