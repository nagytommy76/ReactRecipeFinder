import { setDarkTheme, setLightTheme } from '../Theme'
import { DARK_THEME, LIGHT_THEME } from '../ActionTypes'

describe('Test the theme actions', () => {
    it('should set the DARK_THEME', () => {
        const excpectedActions = {
            type : DARK_THEME
        }
        expect(setDarkTheme()).toEqual(excpectedActions)
    })
    it('should set the LIGHT_THEME', () => {
        const excpectedActions = {
            type : LIGHT_THEME
        }
        expect(setLightTheme()).toEqual(excpectedActions)
    })
})

