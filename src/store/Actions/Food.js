import axios from 'axios'
import {SET_FOODS, RESET_FOODS} from './ActionTypes'
import { showLoading, hideLoading } from './Loading'
axios.defaults.baseURL = 'https://api.spoonacular.com/'

const resetFoods = () => {
    return {
        type: RESET_FOODS
    }
}

const setFoods = (payload) => {
    return {
        type: SET_FOODS,
        payload
    }
}

export const getFoodsBySearchParameters = ({ foodName, includeIngreds, numberOfResults }) => {
    return dispatch => {
        dispatch(showLoading())
        dispatch(resetFoods())
        axios.get(
            `recipes/complexSearch?${process.env.REACT_APP_API_KEY_QUERY}&query=${foodName}&fillIngredients=true&addRecipeInformation=true&addRecipeNutrition=true&number=${parseInt(numberOfResults)}&includeIngredients=${includeIngreds}`
            ).then(food => {
            dispatch(setFoods(food.data.results))
            dispatch(hideLoading())
        })
    }
}
