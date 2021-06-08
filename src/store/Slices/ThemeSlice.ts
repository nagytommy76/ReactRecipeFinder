import { createSlice } from '@reduxjs/toolkit'

const initialState: { isLightTheme: boolean } = {
   isLightTheme: true
}

const themeSlice = createSlice({
   name: 'theme',
   initialState,
   reducers: {
      setDarkTheme(state) {
         state.isLightTheme = false
      },
      setLightTheme(state) {
         state.isLightTheme = true
      }
   }
})

export const { setDarkTheme, setLightTheme } = themeSlice.actions

export default themeSlice.reducer
