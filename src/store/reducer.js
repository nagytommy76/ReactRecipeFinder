import * as ActionTypes from './Actions/ActionTypes'
const initialState = {
    foods: [
        {
            id: 716429,
            title: "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
            image: "https://spoonacular.com/recipeImages/716429-556x370.jpg"
        },
    ]
}

const reducer = (state = initialState, action) =>{
    switch (action.type) {
        case ActionTypes.GET_FOODS:
            return{

            }    
        default:
            return state
    }
}

export default reducer