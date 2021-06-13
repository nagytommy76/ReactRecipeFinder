import { createSlice, PayloadAction } from '@reduxjs/toolkit'
const initialState = {
   isMobileSize: false
}

export const mobileSize = createSlice({
   name: 'MobileSize',
   initialState,
   reducers: {
      setMobileSize: (state, action: PayloadAction<boolean>) => {
         state.isMobileSize = action.payload
      }
   }
})

export const { setMobileSize } = mobileSize.actions

export default mobileSize.reducer
