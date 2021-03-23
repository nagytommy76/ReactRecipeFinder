import { SET_FOODS } from '../Actions/ActionTypes'

const initialState = { foods: [] }

const foodReducer = (state = initialState, action) =>{
    switch (action.type) {
        case SET_FOODS:
            return{
                ...state,
                foods: state.foods.concat(action.payload)
            }   
        default:
            return state
    }
}

export default foodReducer