import axios from 'axios'
import {SET_FOODS} from './ActionTypes'
axios.defaults.baseURL = 'https://api.spoonacular.com/'

// recipes/complexSearch?${process.env.VUE_APP_API_KEY_URL}&query=chciken&fillIngredients=true&addRecipeInformation=true&addRecipeNutrition=true&number=1

export const setFoods = (payload) => {
    return {
        type: SET_FOODS,
        payload
    }
}

export const getFoodsBySearchParameters = (searchParameters) => {
    return dispatch => {
        console.log(searchParameters)
        // axios.get(`recipes/complexSearch?${process.env.REACT_APP_API_KEY_QUERY}&query=pasta&fillIngredients=true&addRecipeInformation=true&addRecipeNutrition=true&number=1`).then(food => {
        //     dispatch(setFoods(food.data.results))
        // })
    }
}
