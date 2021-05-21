import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    menuItems: [],
    selectedMenuItem: null
}

export const menuItemSlice = createSlice({
    name: 'menuItem',
    initialState,
    reducers: {
        test: state => {
            state.selectedMenuItem = 33
        }
    }
})

export const menuItemActions = menuItemSlice.actions

export default menuItemSlice.reducer
