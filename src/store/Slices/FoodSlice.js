import axios from 'axios'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    foods: [],
    selectedFoodId: null
}

export const FoodSlice = createSlice({
    name: 'menuItem',
    initialState,
    reducers: {
        setSelectedFoodId: (state, action) => {
            state.selectedFoodId = action.payload
        },
        setFoods: (state, action) => {
            state.foods.concat(action.payload)
        }
    }
})

export const {setSelectedFoodId, setFoods} = FoodSlice.actions

export default FoodSlice.reducer
// https://redux-toolkit.js.org/usage/usage-guide#redux-data-fetching-patterns
const getFoodsBySearchParameters = () => async dispatch => {

}
