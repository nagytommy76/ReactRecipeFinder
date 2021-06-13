import menuItemSlice from './Slices/MenuItemSlice'
import themeSlice from './Slices/ThemeSlice'
import foodSlice from './Slices/FoodSlice'
import loadingSlice from './Slices/LoadingSlice'
import modalSlice from './Slices/ModalSlice'
import videoSlice from './Slices/VideoSlice'
import errorTextSlice from './Slices/ErrorTextSlice'
import MobileSizeSlice from './Slices/MobileSizeSlice'

import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer, REGISTER, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE } from 'redux-persist'

import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit'

export const rootReducer = combineReducers({
   menuItemReducer: menuItemSlice,
   themeReducer: themeSlice,
   foodReducer: foodSlice,
   loadingReducer: loadingSlice,
   modalReducer: modalSlice,
   videoReducer: videoSlice,
   errorReducer: errorTextSlice,
   mobileReducer: MobileSizeSlice
})

const persistedReducer = persistReducer(
   {
      key: 'root',
      storage,
      blacklist: ['loadingReducer', 'modalReducer', 'errorReducer', 'mobileReducer']
   },
   rootReducer
)

const store = configureStore({
   reducer: persistedReducer,
   middleware: getDefaultMiddleware({
      serializableCheck: {
         ignoredActions: [REGISTER, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE]
      }
   })
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const persistor = persistStore(store)

export default store
