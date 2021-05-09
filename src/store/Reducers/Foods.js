import { SET_FOODS, RESET_FOODS, SET_SELECTED_FOOD_ID} from '../Actions/ActionTypes'

export const initialState = { 
    foods: [],
    selectedFoodId: null
}

const foodReducer = (state = initialState, action) =>{
    switch (action.type) {
        case SET_FOODS:
            return{
                ...state,
                foods: state.foods.concat(action.payload)
            }   
        case RESET_FOODS:
            return{
                ...state,
                foods: state.foods = []
            }
        case SET_SELECTED_FOOD_ID:
            return {
                ...state,
                selectedFoodId: state.selectedFoodId = action.id
            }
        default:
            return state
    }
}

export default foodReducer