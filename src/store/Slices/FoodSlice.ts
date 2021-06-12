import axios from 'axios'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppDispatch } from '../store'
import { showLoading, hideLoading } from './LoadingSlice'
import { FoodArray, FoodState } from './Types/FoodTypes'
axios.defaults.baseURL = 'https://api.spoonacular.com/'

const initialState: FoodState = {
   foods: [],
   selectedFoodId: 0
}

export const foodSlice = createSlice({
   name: 'food',
   initialState,
   reducers: {
      setSelectedFoodId: (state, action: PayloadAction<number>) => {
         state.selectedFoodId = action.payload
      },
      setFoods: (state, action: PayloadAction<FoodArray[]>) => {
         state.foods = action.payload
      }
   }
})

export const { setSelectedFoodId } = foodSlice.actions

export default foodSlice.reducer

// https://redux-toolkit.js.org/usage/usage-guide#redux-data-fetching-patterns
export const getFoodsBySearchParameters =
   ({ foodName, includeIngreds, numberOfResults }: incomingData) =>
   async (dispatch: AppDispatch) => {
      dispatch(showLoading())
      await axios
         .get(
            `recipes/complexSearch?${process.env.REACT_APP_API_KEY_QUERY}&query=${foodName}&fillIngredients=true&addRecipeInformation=true&addRecipeNutrition=true&number=${numberOfResults}&includeIngredients=${includeIngreds}`
         )
         .then((food) => {
            dispatch(foodSlice.actions.setFoods(food.data.results))
            dispatch(hideLoading())
         })
   }

type incomingData = {
   foodName: string
   includeIngreds: string
   numberOfResults: string
}
