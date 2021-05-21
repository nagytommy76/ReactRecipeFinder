import { GET_MENU_ITEMS } from '../Actions/ActionTypes'

export const initialState = {
    menuItems: [],
    selectedMenuItem: null
}

const menuItemReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MENU_ITEMS:
            return {
                ...state,
                menuItems: state.menuItems.concat(action.payload)
            }
        default:
            return state
    }
}

export default menuItemReducer
