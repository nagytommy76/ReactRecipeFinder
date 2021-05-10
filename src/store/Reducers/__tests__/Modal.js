import { SHOW_MODAL, HIDE_MODAL } from '../../Actions/ActionTypes'
import modalReducer, { initialState } from '../Modal'

describe('Testing Modal reducer', () => {
    it('should return the initial state', () => {
        expect(modalReducer(undefined, {})).toEqual(initialState)
    })

    it('should handle SHOW_MODAL', () => {
        expect(modalReducer(
            initialState,
            { type: SHOW_MODAL }
        )).toEqual({
            isModalOpen: true
        })
    })

    it('should handle HIDE_MODAL', () => {
        expect(modalReducer(
            initialState,
            { type: HIDE_MODAL }
        )).toEqual({
            isModalOpen: false
        })
    })
})
