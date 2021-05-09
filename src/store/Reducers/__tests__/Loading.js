import loadingReducer from '../Loading'
import { SHOW_LOADING, HIDE_LOADING } from '../../Actions/ActionTypes'


describe('Testing Loading reducer', () => {
    it('should return false, the initial state', () => {
        expect(loadingReducer(undefined, {})).toEqual({ loading: false })
    })

    it('should set the loading to true, SHOW_LOADING', () => {
        expect(loadingReducer([], { type: SHOW_LOADING })).toEqual({ loading: true })
    })

    it('should set the loading to false, HIDE_LOADING', () => {
        expect(loadingReducer([], { type: HIDE_LOADING })).toEqual({ loading: false })
    })
})
