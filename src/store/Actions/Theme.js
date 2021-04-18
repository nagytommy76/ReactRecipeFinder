import { DARK_THEME, LIGHT_THEME } from './ActionTypes'

export const setDarkTheme = () => {
    return {
        type: DARK_THEME
    }
}

export const setLightTheme = () => {
    return {
        type: LIGHT_THEME
    }
}