import axios from 'axios'
import {SET_FOODS} from './ActionTypes'
axios.defaults.baseURL = 'https://api.spoonacular.com/'

export const setFoods = (payload) => {
    return {
        type: SET_FOODS,
        payload
    }
}

export const getFoodsBySearchParameters = ({ foodName, includeIngreds, numberOfResults }) => {
    return dispatch => {
        // console.log(foodName)
        // console.log(includeIngreds)
        // console.log(parseInt(numberOfResults))
        axios.get(
            `recipes/complexSearch?${process.env.REACT_APP_API_KEY_QUERY}&query=${foodName}&fillIngredients=true&addRecipeInformation=true&addRecipeNutrition=true&number=${parseInt(numberOfResults)}&includeIngredients=${includeIngreds}`
            ).then(food => {
            dispatch(setFoods(food.data.results))
        })
    }
}
