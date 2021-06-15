import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type State = {
   isMobileSize: boolean
   isNavbarOpen: boolean
}

const initialState: State = {
   isMobileSize: false,
   isNavbarOpen: false
}

export const mobileSize = createSlice({
   name: 'MobileSize',
   initialState,
   reducers: {
      setMobileSize: (state, action: PayloadAction<boolean>) => {
         state.isMobileSize = action.payload
      },
      setNavbarOpen: (state, action: PayloadAction<boolean>) => {
         state.isNavbarOpen = action.payload
      }
   }
})

export const { setMobileSize, setNavbarOpen } = mobileSize.actions

export default mobileSize.reducer
