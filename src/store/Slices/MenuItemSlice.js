import { createSlice } from '@reduxjs/toolkit'
import { showLoading, hideLoading } from './LoadingSlice'
import axios from 'axios'

const initialState = {
    menuItems: [],
    selectedMenuItem: null
}

export const menuItemSlice = createSlice({
    name: 'menuItem',
    initialState,
    reducers: {
        setMenuItems: (state, action) => {
            state.menuItems = action.payload
        }
    }
})

export const fetchMenuItems = ({ menuItemName, numberPerPage }) => async dispatch => {
    dispatch(showLoading())
    await axios.get(
        `/food/menuItems/search?${process.env.REACT_APP_API_KEY_QUERY}&query=${menuItemName}&number=${numberPerPage}`
    ).then(menuItems => {
        console.log(menuItems.data.menuItems)
        dispatch(menuItemSlice.actions.setMenuItems(menuItems.data.menuItems))
        dispatch(hideLoading())
    })
}

export default menuItemSlice.reducer
