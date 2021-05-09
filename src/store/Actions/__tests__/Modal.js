import { SHOW_MODAL, HIDE_MODAL } from '../ActionTypes'
import { showModal, hideModal } from '../Modal'

describe('Tesing modal', () => {
    it('should call the SHOW_MODAL action', () => {
        const excpectedActions = {
            type: SHOW_MODAL
        }
        expect(showModal()).toEqual(excpectedActions)
    })
    it('should call the HIDE_MODAL action', () => {
        const excpectedActions = {
            type: HIDE_MODAL
        }
        expect(hideModal()).toEqual(excpectedActions)
    })
})

