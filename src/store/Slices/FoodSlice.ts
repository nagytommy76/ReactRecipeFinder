import axios from 'axios'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppDispatch, RootState } from '../store'
import { showLoading, hideLoading } from './LoadingSlice'
axios.defaults.baseURL = 'https://api.spoonacular.com/'

export type IngredientTypes = {
   id: number
   name: string
   image: string
   measures: { metric: { unitLong: string; amount: string } }
}

type FoodState = {
   foods: {
      id?: number
      title?: string
      extendedIngredients?: IngredientTypes[]
      image?: string
      summary?: string
      analyzedInstructions?: { steps?: object[] }[]
   }[]
   selectedFoodId: number
}

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
      setFoods: (state, action: PayloadAction<object[]>) => {
         state.foods = action.payload
      }
   }
})

export const { setSelectedFoodId } = foodSlice.actions

export default foodSlice.reducer

type incomingData = {
   foodName: string
   includeIngreds: string
   numberOfResults: string
}
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
