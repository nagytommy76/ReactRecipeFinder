import { DARK_THEME, LIGHT_THEME } from '../Actions/ActionTypes'

export const initialState = {
    isLightTheme: true
}

const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case DARK_THEME:
            return {
                ...state,
                isLightTheme: state.isLightTheme = false
            }
        case LIGHT_THEME:
            return {
                ...state,
                isLightTheme: state.isLightTheme = true
            }
        default:
            return state
    }
}

export default themeReducer