import axios from 'axios'
import { createSlice } from '@reduxjs/toolkit'

import { showLoading, hideLoading } from './LoadingSlice'
axios.defaults.baseURL = 'https://api.spoonacular.com/'

export const foodSlice = createSlice({
    name: 'food',
    initialState: {
        foods: [],
        selectedFoodId: null
    },
    reducers: {
        setSelectedFoodId: (state, action) => {
            state.selectedFoodId = action.payload
        },
        setFoods: (state, action) => {
            state.foods = action.payload
        }
    }
})

export const { setSelectedFoodId } = foodSlice.actions

export default foodSlice.reducer

// https://redux-toolkit.js.org/usage/usage-guide#redux-data-fetching-patterns
export const getFoodsBySearchParameters = ({ foodName, includeIngreds, numberOfResults }) => async dispatch => {
    dispatch(showLoading())
    await axios.get(
        `recipes/complexSearch?${process.env.REACT_APP_API_KEY_QUERY}&query=${foodName}&fillIngredients=true&addRecipeInformation=true&addRecipeNutrition=true&number=${parseInt(numberOfResults)}&includeIngredients=${includeIngreds}`
    ).then(food => {
        dispatch(foodSlice.actions.setFoods(food.data.results))
        dispatch(hideLoading())
    })
}
