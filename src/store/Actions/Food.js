import axios from 'axios'
import {SET_FOODS, RESET_FOODS, SET_SELECTED_FOOD_ID} from './ActionTypes'
import { showLoading, hideLoading } from './Loading'
axios.defaults.baseURL = 'https://api.spoonacular.com/'

export const setSelectedFoodId = (id) => { 
    return {
        type: SET_SELECTED_FOOD_ID,
        id 
    }
}

const resetFoods = () => {
    return {
        type: RESET_FOODS
    }
}

export const setFoods = (payload) => {
    return {
        type: SET_FOODS,
        payload
    }
}

export const getFoodsBySearchParameters = ({ foodName, includeIngreds, numberOfResults }) => {
    return async dispatch => {
        dispatch(showLoading())
        dispatch(resetFoods())
        await axios.get(
            `recipes/complexSearch?${process.env.REACT_APP_API_KEY_QUERY}&query=${foodName}&fillIngredients=true&addRecipeInformation=true&addRecipeNutrition=true&number=${parseInt(numberOfResults)}&includeIngredients=${includeIngreds}`
            ).then(food => {
                dispatch(setFoods(food.data.results))
                dispatch(hideLoading())
            })
    }
}
