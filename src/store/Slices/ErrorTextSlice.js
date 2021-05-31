import { createSlice } from '@reduxjs/toolkit'

const errorTextSlice = createSlice({
    name: 'ErrorText',
    initialState: { isError: false, errorText: '' },
    reducers:{
        setErrorText: (state, action) => {
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

export const toggleIsErrorAndSetTest = (errorText, hideAfterMs = 8000) => dispatch => {
    dispatch(setErrorText(errorText))
    dispatch(setError())
    setTimeout(() => {
        dispatch(setErrorText(''))
        dispatch(unsetError())
    },hideAfterMs)
}

export const { setErrorText, setError, unsetError } = errorTextSlice.actions

export default errorTextSlice.reducer
