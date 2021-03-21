import * as ActionTypes from './Actions/ActionTypes'
const initialState = {
    foods: []
}

const reducer = (state = initialState, action) =>{
    switch (action.type) {
        case ActionTypes.SET_FOODS:
            return{
                ...state,
                foods: state.foods.concat(action.payload)
            }    
        default:
            return state
    }
}

export default reducer