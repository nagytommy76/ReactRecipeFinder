import * as ActionTypes from './Actions/ActionTypes'
const initialState = {
    foods: [],
    loading: false
}

const reducer = (state = initialState, action) =>{
    switch (action.type) {
        case ActionTypes.SET_FOODS:
            return{
                ...state,
                foods: state.foods.concat(action.payload)
            }    
        case ActionTypes.SHOW_LOADING:
            return{
                ...state,
                loading: state.loading = true
            }
        case ActionTypes.HIDE_LOADING:
            return{
                ...state,
                loading: state.loading = false
            }
        default:
            return state
    }
}

export default reducer