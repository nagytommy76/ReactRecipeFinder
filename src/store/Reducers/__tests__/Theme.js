import themeReducer, { initialState } from '../Theme'
import { LIGHT_THEME, DARK_THEME } from '../../Actions/ActionTypes'

describe('Theme reducer', () => {
    it('should return the initial state', () => {
        expect(themeReducer(undefined, {})).toEqual(initialState)
    })
    it('should set DARK_THEME', () => {
        expect(themeReducer(initialState, { type: DARK_THEME })).toEqual({ isLightTheme: false })
    })
    it('should set DARK_THEME', () => {
        expect(themeReducer(initialState, { type: LIGHT_THEME })).toEqual({ isLightTheme: true })
    })
})