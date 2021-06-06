import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { showLoading, hideLoading } from './LoadingSlice'
import axios from 'axios'
import { AppDispatch } from '../store'

type MenuState = {
   menuItems: object[]
}
const initialState: MenuState = {
   menuItems: []
}

export const menuItemSlice = createSlice({
   name: 'menuItem',
   initialState,
   reducers: {
      setMenuItems: (state, action: PayloadAction<object[]>) => {
         state.menuItems = action.payload
      }
   }
})

type incomingParameters = {
   menuItemName: string
   numberPerPage: string
}

export const fetchMenuItems =
   ({ menuItemName, numberPerPage }: incomingParameters) =>
   async (dispatch: AppDispatch) => {
      dispatch(showLoading())
      await axios
         .get(`/food/menuItems/search?${process.env.REACT_APP_API_KEY_QUERY}&query=${menuItemName}&number=${numberPerPage}`)
         .then((menuItems) => {
            dispatch(menuItemSlice.actions.setMenuItems(menuItems.data.menuItems))
            dispatch(hideLoading())
         })
   }

export default menuItemSlice.reducer
