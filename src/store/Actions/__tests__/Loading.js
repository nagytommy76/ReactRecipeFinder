import { showLoading, hideLoading } from '../Loading'
import { SHOW_LOADING, HIDE_LOADING } from '../ActionTypes'

describe('Loading action', () => {
    it('should create an action to show the loading spinner', () => {
        const expectedAction = {
            type: SHOW_LOADING
        }
        expect(showLoading()).toEqual(expectedAction)
    })

    it('should create an action to hide the loading spinner', () => {
        const expectedAction = {
            type: HIDE_LOADING
        }
        expect(hideLoading()).toEqual(expectedAction)
    })
})