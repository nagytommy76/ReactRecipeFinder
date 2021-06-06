import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppDispatch } from '../store'

type ErrorState = {
   isError: boolean
   errorText: string
}

const initialState: ErrorState = {
   isError: false,
   errorText: ''
}

const errorTextSlice = createSlice({
   name: 'ErrorText',
   initialState,
   reducers: {
      setErrorText: (state, action: PayloadAction<string>) => {
         state.errorText = action.payload
      },
      setError: (state) => {
         state.isError = true
      },
      unsetError: (state) => {
         state.isError = false
      }
   }
})

export const toggleIsErrorAndSetTest =
   (errorText: string, hideAfterMs: number = 8000) =>
   (dispatch: AppDispatch) => {
      dispatch(setErrorText(errorText))
      dispatch(setError())
      setTimeout(() => {
         dispatch(setErrorText(''))
         dispatch(unsetError())
      }, hideAfterMs)
   }

export const { setErrorText, setError, unsetError } = errorTextSlice.actions

export default errorTextSlice.reducer
