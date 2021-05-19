import { GET_MENU_ITEMS } from '../Actions/ActionTypes'

export const initialState = {
    menuItems: [
        {
            id: 419357,
            title: "Burger Sliders",
            restaurantChain: "Hooters",
            image: "https://images.spoonacular.com/file/wximages/419357-312x231.png",
            imageType: "png"
        },
        {
            id: 424571,
            title: "Bacon King Burger",
            restaurantChain: "Burger King",
            image: "https://images.spoonacular.com/file/wximages/424571-312x231.png",
            imageType: "png"
        }
    ],
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
